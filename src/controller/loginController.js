const express = require("express");
const router = express.Router();
const { UsuarioService } = require("../models/usuario");
const { OAuth2Client } = require('google-auth-library');
const jwt = require("jsonwebtoken");
const client = new OAuth2Client(process.env.GOOGLE_API_KEY);

router.post("/login", async (req, res) => {
  const { email, senha } = req.body;
  try {
    const usuario = await UsuarioService.autenticarUsuario(email, senha);
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(401).json({ message: "Credenciais inválidas" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao autenticar usuário.", error });
  }
});

router.post("/google", async (req, res) => {
  const { token } = req.body;
  try {
    let ticket;
    try {
      ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_API_KEY,
      });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao verificar o token de ID.", error });
    }

    const payload = ticket.getPayload();
    const email = payload['email'];

    let usuario;
    try {
      usuario = await UsuarioService.autenticarUsuarioGoogle(email);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao autenticar usuário do Google.", error });
    }

    if (usuario) {
      let token;
      try {
        token = jwt.sign({ email: usuario.email }, process.env.JWT_SECRET);
      } catch (error) {
        return res.status(500).json({ message: "Erro ao assinar JWT.", error });
      }

      res.json({ usuario, token });
    } else {
      res.status(401).json({ message: "Credenciais inválidas" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao autenticar usuário.", error });
  }
});



module.exports = router;


