const express = require("express");
const router = express.Router();
const { Imovel } = require("../models/imovel");

router.post("/imovel", async (req, res) => {
  try {
    const { endereco, area, quartos, descricao, fotos } = req.body;
    const imovel = await Imovel.create({
      endereco,
      area,
      quartos,
      descricao,
      fotos,
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
  try {
    const { endereco, area, quartos, descricao, fotos } = req.body;
    const imovel = await Imovel.findByPk(req.params.id);
    if (!imovel) {
      res.status(404).json({ message: "Imóvel não encontrado" });
      return;
    }
    imovel.endereco = endereco;
    imovel.area = area;
    imovel.quartos = quartos;
    imovel.descricao = descricao;
    imovel.fotos = fotos;
    await imovel.save();
    res.json(imovel);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao atualizar imóvel" });
  }
});

router.delete("/imovel/:id", async (req, res) => {
  try {
    const imovel = await Imovel.findByPk(req.params.id);
    if (!imovel) {
      res.status(404).json({ message: "Imóvel não encontrado" });
      return;
    }
    await imovel.destroy();
    res.json({ message: "Imóvel deletado com sucesso" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao deletar imóvel" });
  }
});

module.exports = router;
