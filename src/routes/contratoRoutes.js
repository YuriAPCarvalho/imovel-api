const express = require("express");
const router = express.Router();
const contratoService = require("../services/contratoService");

router.post("/", async (req, res) => {
  const contrato = req.body;
  await contratoService.createContrato(contrato);
  res.json(contrato);
});

router.get("/", async (req, res) => {
  const contratos = await contratoService.findContratos();
  res.json(contratos);
});

router.get("/:id", async (req, res) => {
  const contrato = await contratoService.findContratoById(req.params.id);
  res.json(contrato);
});

router.put("/:id", async (req, res) => {
  const contrato = req.body;
  contrato.id = req.params.id;
  await contratoService.updateContrato(contrato);
  res.json(contrato);
});

router.delete("/:id", async (req, res) => {
  await contratoService.deleteContrato(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
