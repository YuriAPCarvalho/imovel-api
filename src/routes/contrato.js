const express = require("express");
const router = express.Router();

const contratoService = require("../services/contratoService");

router.post("/", (req, res) => {
  const contrato = req.body;
  contratoService.createContrato(contrato);
  res.json(contrato);
});

router.get("/", (req, res) => {
  const contratos = contratoService.findContratos();
  res.json(contratos);
});

router.get("/:id", (req, res) => {
  const contrato = contratoService.findContratoById(req.params.id);
  res.json(contrato);
});

router.put("/:id", (req, res) => {
  const contrato = req.body;
  contrato.id = req.params.id;
  contratoService.updateContrato(contrato);
  res.json(contrato);
});

router.delete("/:id", (req, res) => {
  contratoService.deleteContrato(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
