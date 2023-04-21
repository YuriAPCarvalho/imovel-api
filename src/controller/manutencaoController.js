const express = require("express");
const router = express.Router();
const ManutencaoService = require("../models/manutencao");

router.post("/", async (req, res) => {
  const manutencao = req.body;
  const result = await ManutencaoService.createManutencao(manutencao);
  res.json(result);
});

router.get("/", async (req, res) => {
  const result = await ManutencaoService.findManutencoes();
  res.json(result);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await ManutencaoService.findManutencaoById(id);
  res.json(result);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const manutencao = req.body;
  const result = await ManutencaoService.updateManutencao(id, manutencao);
  res.json(result);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await ManutencaoService.deleteManutencao(id);
  res.json(result);
});

module.exports = router;
