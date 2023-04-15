const express = require("express");
const router = express.Router();
const { Contrato } = require("../models/contrato");

router.post("/contrato", async (req, res) => {
  try {
    const { duracao, valor, dataInicio, condicoesEspecificas } = req.body;

    // Cria um novo contrato com as informações fornecidas
    const contrato = await Contrato.create({
      duracao,
      valor,
      dataInicio,
      condicoesEspecificas,
    });

    res.status(201).json({ contrato });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao criar contrato" });
  }
});

router.get("/contrato", async (req, res) => {
  try {
    const contratos = await Contrato.findAll();
    res.status(200).json({ contratos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar contratos" });
  }
});

router.get("/contrato/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const contrato = await Contrato.findByPk(id);
    if (!contrato) {
      return res.status(404).send("Contrato não encontrado");
    }
    res.status(200).json(contrato);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao buscar contrato");
  }
});

router.put("/contrato/:id", async (req, res) => {
  try {
    const { duracao, valor, dataInicio, condicoesEspecificas } = req.body;

    // Busca o contrato pelo id fornecido
    const contrato = await Contrato.findByPk(req.params.id);

    // Verifica se o contrato foi encontrado
    if (!contrato) {
      return res.status(404).json({ message: "Contrato não encontrado" });
    }

    // Atualiza as informações do contrato
    contrato.duracao = duracao;
    contrato.valor = valor;
    contrato.dataInicio = dataInicio;
    contrato.condicoesEspecificas = condicoesEspecificas;

    // Salva as alterações no banco de dados
    await contrato.save();

    res.status(200).json({ contrato });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao atualizar contrato" });
  }
});

// Deleta um contrato com o id fornecido
router.delete("/contrato/:id", async (req, res) => {
  try {
    // Busca o contrato pelo id fornecido
    const contrato = await Contrato.findByPk(req.params.id);

    // Verifica se o contrato foi encontrado
    if (!contrato) {
      return res.status(404).json({ message: "Contrato não encontrado" });
    }

    // Deleta o contrato do banco de dados
    await contrato.destroy();

    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao deletar contrato" });
  }
});

module.exports = router;
