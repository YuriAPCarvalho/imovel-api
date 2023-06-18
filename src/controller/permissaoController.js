const express = require("express");
const router = express.Router();
const { Permissao } = require("../models/permissao");

router.post("/", async (req, res) => {
  try {
    const {
      nome,
      visitas,
      proprietarios,
      imobiliarias,
      imoveis,
      inquilinos,
      contratos,
      manutencao,
      avaliacao,
      usuarios,
      perfil,
    } = req.body;

    const permissaoExistente = await Permissao.findOne({ where: { nome } });

    if (permissaoExistente) {
      return res.status(409).json({ message: "Permissão já cadastrada" });
    }

    const novaPermissao = await Permissao.create({
      nome,
      visitas,
      proprietarios,
      imobiliarias,
      imoveis,
      inquilinos,
      contratos,
      manutencao,
      avaliacao,
      usuarios,
      perfil,
    });

    res.status(201).json(novaPermissao);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao criar permissão" });
  }
});

router.get("/", async (req, res) => {
  try {
    const permissoes = await Permissao.findAll();
    res.json(permissoes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao buscar permissões" });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const permissao = await Permissao.findByPk(id);
    if (!permissao) {
      return res.status(404).send("Permissão não encontrada");
    }
    return res.status(200).json(permissao);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Erro ao buscar permissão");
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [rowsUpdated, [permissao]] = await Permissao.update(req.body, {
      returning: true,
      where: { id },
    });
    if (rowsUpdated === 0) {
      return res.status(404).json({ message: "Permissão não encontrada" });
    }
    res.json(permissao);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao atualizar permissão" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const rowsDeleted = await Permissao.destroy({ where: { id } });
    if (rowsDeleted === 0) {
      return res.status(404).json({ message: "Permissão não encontrada" });
    }
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao deletar permissão" });
  }
});

module.exports = router;
