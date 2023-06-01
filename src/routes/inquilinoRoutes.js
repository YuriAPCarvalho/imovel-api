const express = require("express");
const router = express.Router();
const InquilinoService = require("../services/inquilinoService");

router.post("/", async (req, res) => {
  try {
    const inquilino = req.body;
    const result = await InquilinoService.createInquilino(inquilino);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await InquilinoService.findInquilinos();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao obter inquilinos" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await InquilinoService.findInquilinoById(id);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Inquilino não encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao obter inquilino" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const inquilino = req.body;
    const result = await InquilinoService.updateInquilino(id, inquilino);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Inquilino não encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao atualizar inquilino" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await InquilinoService.deleteInquilino(id);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Inquilino não encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao excluir inquilino" });
  }
});

module.exports = router;
