const express = require("express");
const router = express.Router();
const { SolicitacaoAluguelService } = require("../models/solicitacaoAluguel");

router.post("/", async (req, res) => {
  try {
    const solicitacao = req.body;
    const novaSolicitacao =
      await SolicitacaoAluguelService.createSolicitacaoAluguel(solicitacao);
    res.status(201).json(novaSolicitacao);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao criar solicitação de aluguel" });
  }
});

router.get("/", async (req, res) => {
  try {
    const solicitacoes =
      await SolicitacaoAluguelService.findSolicitacoesAluguel();
    res.json(solicitacoes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao buscar solicitações de aluguel" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const solicitacao =
      await SolicitacaoAluguelService.findSolicitacaoAluguelById(req.params.id);
    if (solicitacao) {
      res.json(solicitacao);
    } else {
      res
        .status(404)
        .json({ message: "Solicitação de aluguel não encontrada" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao buscar solicitação de aluguel" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const solicitacao = req.body;
    solicitacao.id = req.params.id;
    const linhasAtualizadas =
      await SolicitacaoAluguelService.updateSolicitacaoAluguel(solicitacao);
    if (linhasAtualizadas > 0) {
      res.json({ message: "Solicitação de aluguel atualizada com sucesso" });
    } else {
      res
        .status(404)
        .json({ message: "Solicitação de aluguel não encontrada" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Erro ao atualizar solicitação de aluguel" });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const solicitacao =
      await SolicitacaoAluguelService.findSolicitacaoAluguelById(id);

    if (!solicitacao) {
      return res
        .status(404)
        .json({ error: "Solicitação de aluguel não encontrada" });
    }

    await SolicitacaoAluguelService.deleteSolicitacaoAluguel(id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao deletar a solicitação de aluguel" });
  }
});

module.exports = router;
