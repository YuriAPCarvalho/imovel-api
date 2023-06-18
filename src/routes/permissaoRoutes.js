const express = require("express");
const router = express.Router();
const PermissaoService = require("../services/permissaoService");

router.post("/", async (req, res) => {
  try {
    const permissao = req.body;
    const result = await PermissaoService.createPermissao(permissao);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await PermissaoService.findPermissoes();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await PermissaoService.findPermissaoById(id);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Permissão não encontrada" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao obter permissão" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const permissao = req.body;
    const result = await PermissaoService.updatePermissao(id, permissao);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Permissão não encontrada" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao atualizar permissão" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await PermissaoService.deletePermissao(id);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Permissão não encontrada" });
    }
  } catch (error) {
    const { id } = req.params;
    if (id == 1 || id == 2) {
      res.status(401).json({ message: "Esse perfil não pode ser deletado." });
      console.log(error);
    } else {
      res.status(500).json({ message: "Erro ao excluir permissão" });
    }
  }
});

module.exports = router;
