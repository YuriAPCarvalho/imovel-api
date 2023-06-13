const express = require("express");
const router = express.Router();
const ImovelService = require("../services/imovelService");

router.post("/", async (req, res) => {
  try {
    const imovel = req.body;
    const result = await ImovelService.createImovel(imovel);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await ImovelService.findImoveis();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao obter imóveis" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await ImovelService.findImovelById(id);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Imóvel não encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao obter imóvel" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const imovel = req.body;
    const result = await ImovelService.updateImovel(id, imovel);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Imóvel não encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao atualizar imóvel" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await ImovelService.deleteImovel(id);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Imóvel não encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao excluir imóvel" });
  }
});

module.exports = router;
