const express = require("express");
const router = express.Router();
const VisitaService = require("../services/visitaService");

router.post("/", async (req, res) => {
  const visita = req.body;
  const result = await VisitaService.createVisita(visita);
  res.json(result);
});

router.get("/", async (req, res) => {
  const result = await VisitaService.findVisitas();
  res.json(result);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await VisitaService.findVisitaById(id);
  res.json(result);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const visita = req.body;
  const result = await VisitaService.updateVisita(id, visita);
  res.json(result);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await VisitaService.deleteVisita(id);
  res.json(result);
});

module.exports = router;
