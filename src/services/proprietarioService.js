const Proprietario = require("../models/proprietario");

class ProprietarioService {
  constructor() {}

  async createProprietario(proprietario) {
    try {
      const novoProprietario = await Proprietario.create(proprietario);
      return novoProprietario;
    } catch (error) {
      throw new Error("Não foi possível criar o proprietário");
    }
  }

  async findProprietarios() {
    try {
      const proprietarios = await Proprietario.findAll();
      return proprietarios;
    } catch (error) {
      throw new Error("Não foi possível buscar os proprietários");
    }
  }

  async findProprietarioById(id) {
    try {
      const proprietario = await Proprietario.findByPk(id);
      if (!proprietario) throw new Error("Proprietário não encontrado");
      return proprietario;
    } catch (error) {
      throw new Error("Não foi possível buscar o proprietário");
    }
  }

  async updateProprietario(id, novoProprietario) {
    try {
      const proprietario = await Proprietario.findByPk(id);
      if (!proprietario) throw new Error("Proprietário não encontrado");
      await proprietario.update(novoProprietario);
      return proprietario;
    } catch (error) {
      throw new Error("Não foi possível atualizar o proprietário");
    }
  }

  async deleteProprietario(id) {
    try {
      const proprietario = await Proprietario.findByPk(id);
      if (!proprietario) throw new Error("Proprietário não encontrado");
      await proprietario.destroy();
      return proprietario;
    } catch (error) {
      throw new Error("Não foi possível deletar o proprietário");
    }
  }
}

module.exports = new ProprietarioService();
