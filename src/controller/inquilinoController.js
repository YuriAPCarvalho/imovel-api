const express = require("express");
const router = express.Router();
const inquilinoService = require("../services/inquilinoService");

router.post("/", (req, res) => {
  // Adicione a lógica para criar um inquilino
});

router.get("/", (req, res) => {
  // Adicione a lógica para buscar inquilinos
});

router.put("/:id", (req, res) => {
  // Adicione a lógica para atualizar um inquilino
});

router.delete("/:id", (req, res) => {
  // Adicione a lógica para deletar um inquilino
});

module.exports = router;
