const express = require("express");
const router = express.Router();
const AvaliacaoService = require("../services/avalicaoService");

router.post("/", async (req, res) => {
  try {
    const avaliacao = req.body;
    const result = await AvaliacaoService.createAvaliacao(avaliacao);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await AvaliacaoService.findAvaliacao();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao obter avaliações" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await AvaliacaoService.findAvaliacaoById(id);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Avaliação não encontrada" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao obter avaliação" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const avaliacao = req.body;
    const result = await AvaliacaoService.updateAvaliacao(id, avaliacao);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Avaliação não encontrada" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao atualizar avaliação" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await AvaliacaoService.deleteAvaliacao(id);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Avaliação não encontrada" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao excluir avaliação" });
  }
});

module.exports = router;
