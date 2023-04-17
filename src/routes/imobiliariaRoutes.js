const express = require("express");
const router = express.Router();
const ImobiliariaService = require("../services/imobiliariaService");

router.post("/", async (req, res) => {
  const imobiliaria = req.body;
  const result = await ImobiliariaService.createImobiliaria(imobiliaria);
  res.json(result);
});

router.get("/", async (req, res) => {
  const result = await ImobiliariaService.findImobiliarias();
  res.json(result);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await ImobiliariaService.findImobiliariaById(id);
  res.json(result);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const imobiliaria = req.body;
  const result = await ImobiliariaService.updateImobiliaria(id, imobiliaria);
  res.json(result);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await ImobiliariaService.deleteImobiliaria(id);
  res.json(result);
});

module.exports = router;
