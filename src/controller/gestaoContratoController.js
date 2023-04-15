const express = require("express");
const router = express.Router();
const { GestaoContratoService } = require("../models/gestaoContrato");

router.post("/", async (req, res) => {
  const gestaoContrato = req.body;
  const result = await GestaoContratoService.createGestaoContrato(
    gestaoContrato
  );
  res.json(result);
});

router.get("/", async (req, res) => {
  const result = await GestaoContratoService.findGestaoContratos();
  res.json(result);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await GestaoContratoService.findGestaoContratoById(id);
  res.json(result);
});

router;
