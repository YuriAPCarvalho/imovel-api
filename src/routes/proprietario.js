const express = require("express");
const router = express.Router();
const ProprietarioService = require("../services/proprietarioService");

router.post("/", (req, res) => {
  const proprietario = req.body;
  const result = ProprietarioService.createProprietario(proprietario);
  res.json(result);
});

router.get("/", (req, res) => {
  const result = ProprietarioService.findProprietarios();
  res.json(result);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const result = ProprietarioService.findProprietarioById(id);
  res.json(result);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const proprietario = req.body;
  const result = ProprietarioService.updateProprietario(id, proprietario);
  res.json(result);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const result = ProprietarioService.deleteProprietario(id);
  res.json(result);
});

module.exports = router;
