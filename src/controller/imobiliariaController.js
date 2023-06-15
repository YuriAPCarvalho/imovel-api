const express = require("express");
const router = express.Router();
const { Imobiliaria } = require("../models/imobiliaria");

router.post("/imobiliaria", async (req, res) => {
  try {
    const { nome, cnpj, endereco, telefone } = req.body;

    const existingImobiliaria = await Imobiliaria.findOne({
      $or: [{ cnpj }],
    });

    if (existingImobiliaria) {
      // Retorna uma resposta com status 409 (conflito) indicando a duplicidade
      return res.status(409).json({ message: "Imobiliária já cadastrados" });
    }

    const imobiliaria = await Imobiliaria.create({
      nome,
      cnpj,
      endereco,
      telefone,
    });

    res.status(201).json(imobiliaria);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao criar imobiliária" });
  }
});

router.get("/imobiliaria", async (req, res) => {
  try {
    const imobiliarias = await Imobiliaria.findAll();
    res.json(imobiliarias);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao buscar imobiliárias" });
  }
});

router.get("/imobiliaria/:id", async (req, res) => {
  try {
    const imobiliaria = await Imobiliaria.findByPk(req.params.id);
    if (imobiliaria) {
      res.json(imobiliaria);
    } else {
      res.status(404).json({ message: "Imobiliária não encontrada" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao buscar imobiliária" });
  }
});

router.put("/imobiliaria/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const imobiliaria = req.body;
    const [linhasAtualizadas] = await Imobiliaria.update(imobiliaria, {
      where: { id },
    });
    if (linhasAtualizadas > 0) {
      res.json({ message: "Imobiliária atualizada com sucesso" });
    } else {
      res.status(404).json({ message: "Imobiliária não encontrada" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao atualizar imobiliária" });
  }
});

router.delete("/imobiliaria/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const imobiliaria = await Imobiliaria.findByPk(id);

    if (!imobiliaria) {
      return res.status(404).json({ error: "Imobiliária não encontrada" });
    }
    await imobiliaria.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao deletar a imobiliária" });
  }
});

module.exports = router;
