const express = require("express");
const router = express.Router();
const PagamentoService = require("../services/pagamentoService");

router.post("/", async (req, res) => {
  const pagamento = req.body;
  const result = await PagamentoService.createPagamento(pagamento);
  res.json(result);
});

router.get("/", async (req, res) => {
  const result = await PagamentoService.findPagamentos();
  res.json(result);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await PagamentoService.findPagamentoById(id);
  res.json(result);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const pagamento = req.body;
  const result = await PagamentoService.updatePagamento(id, pagamento);
  res.json(result);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await PagamentoService.deletePagamento(id);
  res.json(result);
});

module.exports = router;
