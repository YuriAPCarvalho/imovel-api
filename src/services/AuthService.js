const usuarioModel = require("../models/usuario");

const crypto = require("crypto");
const { createAuthToken } = require("../helpers/TokenHelper");

async function login(data) {
  // buscar por email
  const user = await usuarioModel.findOne({ email: data.email });
  // se nao existir lançar exceçao
  if (!user._id) {
    throw { status: 400, message: "Email ou senha inválidos" };
  }
  // se existir bater a senha
  const equals = crypto.timingSafeEqual(
    Buffer.from(data.senha),
    Buffer.from(user.senha)
  );
  // se for invalida lançar exceção
  if (!equals) {
    throw { status: 400, message: "Email ou senha inválidos" };
  }

  const token = createAuthToken({ email: user.email, role: user.role });

  return {
    role: user.role,
    email: user.email,
    token,
  };
  // se for valida criar um token e devolver o usuário logado
}

async function authenticateGoogle(user) {
  const usuario = await usuarioModel.findOne({
    senha: user.code,
    email: user.email,
  });

  const token = createAuthToken({ email: user.email, role: "cliente" });
  return {
    name: user.name,
    isLogin: Boolean(usuario && usuario._id),
    email: user.email,
    token,
    code: user.code,
    role: "cliente",
  };
}
module.exports = { login, authenticateGoogle };
