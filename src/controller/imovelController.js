const express = require("express");
const router = express.Router();
const { Imovel } = require("../models/imovel");

router.post("/imovel", async (req, res) => {
  try {
    const { endereco, descricao, proprietario, imobiliaria } = req.body;

    const imovel = await Imovel.create({
      endereco,
      descricao,
      proprietario,
      imobiliaria,
    });
    res.status(201).json(imovel);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao criar imóvel" });
  }
});

router.get("/imovel", async (req, res) => {
  try {
    const imoveis = await Imovel.findAll();
    res.json(imoveis);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao buscar imóveis" });
  }
});

router.get("/imovel/:id", async (req, res) => {
  try {
    const imovel = await Imovel.findByPk(req.params.id);
    if (imovel) {
      res.status(200).json(imovel);
    } else {
      res.status(404).send("Imóvel não encontrado");
    }
  } catch (error) {
    res.status(500).send("Erro ao buscar imóvel");
  }
});

router.put("/imovel/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [rowsUpdated, [imovel]] = await Imovel.update(req.body, {
      returning: true,
      where: { id },
    });
    if (rowsUpdated === 0) {
      return res.status(404).json({ message: "imovel não encontrado" });
    }
    res.json(imovel);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao atualizar imovel" });
  }
});

router.delete("/imovel/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const rowsDeleted = await Imovel.destroy({ where: { id } });
    if (rowsDeleted === 0) {
      return res.status(404).json({ message: "Imovel não encontrado" });
    }
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao deletar Imovel" });
  }
});

module.exports = router;
