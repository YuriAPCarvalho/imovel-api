const express = require("express");
const router = express.Router();
const proprietarioService = require("../services/proprietarioService");

router.post("/", (req, res) => {
  // Adicione a lógica para criar um proprietário
});

router.get("/", (req, res) => {
  // Adicione a lógica para buscar proprietários
});

router.put("/:id", (req, res) => {
  // Adicione a lógica para atualizar um proprietário
});

router.delete("/:id", (req, res) => {
  // Adicione a lógica para deletar um proprietário
});

module.exports = router;
