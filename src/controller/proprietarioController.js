const express = require("express");
const router = express.Router();
const { Proprietario } = require("../models/proprietario");

router.post("/proprietario", async (req, res) => {
  try {
    const { nome, cpf, email, telefone } = req.body;

    const existingProprietario = await Proprietario.findOne({
      $or: [{ cpf }, { email }],
    });

    if (existingProprietario) {
      // Retorna uma resposta com status 409 (conflito) indicando a duplicidade
      return res.status(409).json({ message: "cpf ou e-mail já cadastrados" });
    }

    const proprietario = await Proprietario.create({
      nome,
      cpf,
      email,
      telefone,
    });

    res.status(201).json(proprietario);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao criar proprietário" });
  }
});

router.get("/proprietario", async (req, res) => {
  try {
    const proprietarios = await Proprietario.findAll();
    res.json(proprietarios);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao buscar proprietários" });
  }
});

router.get("/proprietario/:id", async (req, res) => {
  try {
    const proprietario = await Proprietario.findByPk(req.params.id);
    if (proprietario) {
      res.json(proprietario);
    } else {
      res.status(404).json({ message: "Proprietário não encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao buscar proprietário" });
  }
});

router.put("/proprietario/:id", async (req, res) => {
  try {
    const { nome, cpf, email, telefone } = req.body;
    const [linhasAtualizadas] = await Proprietario.update(
      { nome, cpf, email, telefone },
      { where: { id: req.params.id } }
    );
    if (linhasAtualizadas > 0) {
      res.json({ message: "Proprietário atualizado com sucesso" });
    } else {
      res.status(404).json({ message: "Proprietário não encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao atualizar proprietário" });
  }
});

router.delete("/proprietario/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const proprietario = await Proprietario.findByPk(id);

    if (!proprietario) {
      return res.status(404).json({ error: "Proprietário não encontrado" });
    }

    await proprietario.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao deletar o proprietário" });
  }
});

module.exports = router;
