const express = require("express");
const router = express.Router();
const ImovelService = require("../services/imovelService");

router.post("/", (req, res) => {
  const imovel = req.body;
  const result = ImovelService.createImovel(imovel);
  res.json(result);
});

router.get("/", (req, res) => {
  const result = ImovelService.findImoveis();
  res.json(result);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const result = ImovelService.findImovelById(id);
  res.json(result);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const imovel = req.body;
  const result = ImovelService.updateImovel(id, imovel);
  res.json(result);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const result = ImovelService.deleteImovel(id);
  res.json(result);
});

module.exports = router;
