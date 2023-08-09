const express = require("express");
const router = express.Router();
const ProprietarioService = require("../services/proprietarioService");
const { AuthMiddleware, isAdmin } = require("../middlewares/authenticateToken");


router.post("/", async (req, res) => {
  try {
    const proprietario = req.body;
    const result = await ProprietarioService.createProprietario(proprietario);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/", AuthMiddleware.apply(['ADMINISTRADOR']), isAdmin, async (req, res) => {
  try {
    const result = await ProprietarioService.findProprietarios();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao obter proprietários" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await ProprietarioService.findProprietarioById(id);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Proprietário não encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao obter proprietário" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const proprietario = req.body;
    const result = await ProprietarioService.updateProprietario(id, proprietario);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Proprietário não encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao atualizar proprietário" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await ProprietarioService.deleteProprietario(id);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Proprietário não encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao excluir proprietário" });
  }
});

module.exports = router;
