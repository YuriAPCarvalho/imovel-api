const express = require("express");
const router = express.Router();
const { Manutencao } = require("../models/manutencao");

router.post("/manutencao", async (req, res) => {
  try {
    const { descricao, valor, imovel, imobiliaria } = req.body;

    const manutencao = await Manutencao.create({
      descricao,
      valor,
      imovel,
      imobiliaria,
    });

    res.status(201).json(manutencao);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao criar manutenção" });
  }
});

router.get("/manutencao", async (req, res) => {
  try {
    const manutencoes = await Manutencao.findAll();
    res.json(manutencoes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao buscar manutenções" });
  }
});

router.get("/manutencao/:id", async (req, res) => {
  try {
    const manutencao = await Manutencao.findByPk(req.params.id);
    if (manutencao) {
      res.json(manutencao);
    } else {
      res.status(404).json({ message: "Manutenção não encontrada" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao buscar manutenção" });
  }
});

router.put("/manutencao/:id", async (req, res) => {
  try {
    const { descricao, valor, imovel, imobiliaria } = req.body;
    const [linhasAtualizadas] = await Manutencao.update(
      { descricao, valor, imovel, imobiliaria },
      { where: { id: req.params.id } }
    );
    if (linhasAtualizadas > 0) {
      res.json({ message: "Manutenção atualizada com sucesso" });
    } else {
      res.status(404).json({ message: "Manutenção não encontrada" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao atualizar manutenção" });
  }
});

router.delete("/manutencao/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const manutencao = await Manutencao.findByPk(id);

    if (!manutencao) {
      return res.status(404).json({ error: "Manutenção não encontrada" });
    }

    await manutencao.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao deletar a manutenção" });
  }
});

module.exports = router;
