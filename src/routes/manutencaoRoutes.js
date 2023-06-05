const express = require("express");
const router = express.Router();
const ManutencaoService = require("../services/manutencaoService");

router.post("/", async (req, res) => {
  try {
    const manutencao = req.body;
    const result = await ManutencaoService.createManutencao(manutencao);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await ManutencaoService.findManutencoes();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao obter manutenções" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await ManutencaoService.findManutencaoById(id);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Manutenção não encontrada" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao obter manutenção" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const manutencao = req.body;
    const result = await ManutencaoService.updateManutencao(id, manutencao);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Manutenção não encontrada" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao atualizar manutenção" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await ManutencaoService.deleteManutencao(id);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Manutenção não encontrada" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao excluir manutenção" });
  }
});

module.exports = router;
