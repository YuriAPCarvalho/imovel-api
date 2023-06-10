const Usuario = require("../models/usuario");
const bcrypt = require("bcrypt");

class UsuarioService {
  async createUsuario(usuario) {
    try {
      const newUsuario = await Usuario.create(usuario);
      return newUsuario;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findUsuarios() {
    try {
      const usuarios = await Usuario.findAll();
      return usuarios;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findUsuarioById(id) {
    try {
      const usuario = await Usuario.findByPk(id);
      return usuario;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async updateUsuario(id, usuario) {
    try {
      const [updatedRowsCount, updatedRows] = await Usuario.update(usuario, {
        where: {
          id: id,
        },
        returning: true,
      });
      if (updatedRowsCount === 0) {
        throw new Error("Usuário não encontrado");
      }
      return updatedRows[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async deleteUsuario(id) {
    try {
      const deletedRowCount = await Usuario.destroy({
        where: {
          id: id,
        },
      });
      if (deletedRowCount === 0) {
        throw new Error("Usuário não encontrado");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

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
      console.log(error.message);
      throw new Error(error.message);
    }
  }
}

module.exports = new UsuarioService();
