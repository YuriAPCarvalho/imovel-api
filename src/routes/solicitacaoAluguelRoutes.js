const express = require("express");
const router = express.Router();
const SolicitacaoAluguelService = require("../services/solicitacaoAluguelService");

router.post("/", async (req, res) => {
  const solicitacao = req.body;
  const result = await SolicitacaoAluguelService.createSolicitacaoAluguel(solicitacao);
  res.json(result);
});

router.get("/", async (req, res) => {
  const solicitacoes = await SolicitacaoAluguelService.findSolicitacoesAluguel();
  res.json(solicitacoes);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const solicitacao = await SolicitacaoAluguelService.findSolicitacaoAluguelById(id);
  res.json(solicitacao);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const solicitacao = req.body;
  solicitacao.id = id;
  const result = await SolicitacaoAluguelService.updateSolicitacaoAluguel(solicitacao);
  res.json(result);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await SolicitacaoAluguelService.deleteSolicitacaoAluguel(id);
  res.json(result);
});

module.exports = router;
