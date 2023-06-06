const express = require("express");
const router = express.Router();
const { AvaliacaoService } = require("../models/avaliacaoService");

router.post("/", async (req, res) => {
  const avaliacao = req.body;
  const result = await AvaliacaoService.createAvaliacao(avaliacao);
  res.json(result);
});

router.get("/", async (req, res) => {
  const result = await AvaliacaoService.findAvaliacao();
  res.json(result);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await AvaliacaoService.findAvaliacaoById(id);
  res.json(result);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const avaliacao = req.body;
  const result = await AvaliacaoService.updateAvaliacao(id, avaliacao);
  res.json(result);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await AvaliacaoService.deleteAvaliacao(id);
  res.json(result);
});

module.exports = router;
