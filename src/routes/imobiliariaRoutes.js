const express = require("express");
const router = express.Router();
const ImobiliariaService = require("../services/imobiliariaService");

router.post("/", async (req, res) => {
  try {
    const imobiliaria = req.body;
    const result = await ImobiliariaService.createImobiliaria(imobiliaria);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await ImobiliariaService.findImobiliarias();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao obter imobiliárias" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await ImobiliariaService.findImobiliariaById(id);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Imobiliária não encontrada" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao obter imobiliária" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const imobiliaria = req.body;
    const result = await ImobiliariaService.updateImobiliaria(id, imobiliaria);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Imobiliária não encontrada" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao atualizar imobiliária" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await ImobiliariaService.deleteImobiliaria(id);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Imobiliária não encontrada" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao excluir imobiliária" });
  }
});

module.exports = router;
