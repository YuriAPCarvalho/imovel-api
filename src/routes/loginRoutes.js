const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const UsuarioService = require("../services/UsuarioService");

router.post("/", async (req, res) => {
  const { email, senha } = req.body;
  try {
    const usuario = await UsuarioService.autenticarUsuario(email, senha);
    if (usuario) {
      // Gerando o token com a chave secreta
      const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET);

      // Retornando o usuário e o token
      res.json({ usuario, token });
    } else {
      res.status(401).json({ message: "Credenciais inválidas" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao autenticar usuário.", error });
  }
});

router.post("/google", async (req, res) => {
  const { email, token } = req.body;
  try {
    const usuario = await UsuarioService.autenticarUsuarioGoogle(email, token);
    if (usuario) {
      const token = jwt.sign({ email: usuario.email }, process.env.JWT_SECRET);

      res.json({ usuario, token });
    } else {
      res.status(401).json({ message: "Credenciais inválidas" });
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Erro ao autenticar usuário.", error });
  }
});


module.exports = router;

