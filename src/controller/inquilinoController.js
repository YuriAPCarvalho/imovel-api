const express = require("express");
const router = express.Router();
const { Inquilino } = require("../models/inquilino");

router.post("/inquilino", async (req, res) => {
  try {
    const { nome, cpf, email, telefone } = req.body;

    const existingInquilino = await Inquilino.findOne({
      $or: [{ cpf }, { email }],
    });

    if (existingInquilino) {
      // Retorna uma resposta com status 409 (conflito) indicando a duplicidade
      return res.status(409).json({ message: "cpf ou e-mail já cadastrados" });
    }

    const inquilino = await Inquilino.create({
      nome,
      cpf,
      email,
      telefone,
    });

    res.status(201).json(inquilino);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao criar proprietário" });
  }
});

router.get("/inquilino", async (req, res) => {
  try {
    const inquilinos = await Inquilino.findAll();
    res.json(inquilinos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao buscar inquilinos" });
  }
});

router.get("/inquilino/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const inquilino = await Inquilino.findByPk(id);
    if (!inquilino) {
      return res.status(404).send("Inquilino não encontrado");
    }
    return res.status(200).json(inquilino);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Erro ao buscar inquilino");
  }
});

router.put("/inquilino/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [rowsUpdated, [inquilino]] = await Inquilino.update(req.body, {
      returning: true,
      where: { id },
    });
    if (rowsUpdated === 0) {
      return res.status(404).json({ message: "Inquilino não encontrado" });
    }
    res.json(inquilino);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao atualizar inquilino" });
  }
});

router.delete("/inquilino/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const rowsDeleted = await Inquilino.destroy({ where: { id } });
    if (rowsDeleted === 0) {
      return res.status(404).json({ message: "Inquilino não encontrado" });
    }
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao deletar inquilino" });
  }
});

module.exports = router;
