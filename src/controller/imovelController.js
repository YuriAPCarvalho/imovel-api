const express = require("express");
const router = express.Router();
const imovelService = require("../services/imovelService");

router.post("/", (req, res) => {
  // Adicione a lógica para criar um imóvel
});

router.get("/", (req, res) => {
  // Adicione a lógica para buscar imóveis
});

router.put("/:id", (req, res) => {
  // Adicione a lógica para atualizar um imóvel
});

router.delete("/:id", (req, res) => {
  // Adicione a lógica para deletar um imóvel
});

module.exports = router;
