const express = require("express");
const router = express.Router();
const ProprietarioService = require("../services/proprietarioService");

router.post("/", async (req, res) => {
  const proprietario = req.body;
  const result = await ProprietarioService.createProprietario(proprietario);
  res.json(result);
});

router.get("/", async (req, res) => {
  const result = await ProprietarioService.findProprietarios();
  res.json(result);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await ProprietarioService.findProprietarioById(id);
  res.json(result);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const proprietario = req.body;
  const result = await ProprietarioService.updateProprietario(id, proprietario);
  res.json(result);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await ProprietarioService.deleteProprietario(id);
  res.json(result);
});

module.exports = router;
