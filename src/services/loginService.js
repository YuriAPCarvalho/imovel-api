const Usuario = require("../models/usuario");
const bcrypt = require("bcrypt");

class UsuarioService {
  async autenticarUsuario(email, senha) {
    try {
      const usuario = await Usuario.findOne({ where: { email: email } });
      if (!usuario) {
        return null;
      }
      const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
      if (senhaCorreta) {
        return usuario;
      } else {
        return null;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async autenticarUsuarioGoogle(email, senha) {
    try {
      let usuario = await Usuario.findOne({ where: { email: email } });
      if (!usuario) {
        usuario = await Usuario.create({ email: email, senha: senha });
      }
      return usuario;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = new UsuarioService();