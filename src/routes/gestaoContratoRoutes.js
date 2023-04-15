const express = require("express");
const router = express.Router();
const GestaoContratoService = require("../services/gestaoContratoService");

router.post("/", (req, res) => {
  const gestaoContrato = req.body;
  const result = GestaoContratoService.createGestaoContrato(gestaoContrato);
  res.json(result);
});

router.get("/", (req, res) => {
  const result = GestaoContratoService.findGestoesContratos();
  res.json(result);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const result = GestaoContratoService.findGestaoContratoById(id);
  res.json(result);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const gestaoContrato = req.body;
  const result = GestaoContratoService.updateGestaoContrato(id, gestaoContrato);
  res.json(result);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const result = GestaoContratoService.deleteGestaoContrato(id);
  res.json(result);
});

module.exports = router;
