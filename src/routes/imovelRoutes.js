const express = require("express");
const router = express.Router();
const ImovelService = require("../services/imovelService");

router.post("/", async (req, res) => {
  const imovel = req.body;
  const result = await ImovelService.createImovel(imovel);
  res.json(result);
});

router.get("/", async (req, res) => {
  const result = await ImovelService.findImoveis();
  res.json(result);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await ImovelService.findImovelById(id);
  res.json(result);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const imovel = req.body;
  const result = await ImovelService.updateImovel(id, imovel);
  res.json(result);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await ImovelService.deleteImovel(id);
  res.json(result);
});

module.exports = router;
