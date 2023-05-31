const Proprietario = require("../models/proprietario");
const { Op } = require("sequelize");

class ProprietarioService {
  constructor() {}

  async createProprietario(proprietario) {
    try {
      const existingProprietario = await Proprietario.findOne({
        where: {
          [Op.or]: [{ cpf: proprietario.cpf }, { email: proprietario.email }],
        },
      });

      if (existingProprietario) {
        throw new Error("CPF ou e-mail já cadastrados");
      }

      const novoProprietario = await Proprietario.create(proprietario);
      return novoProprietario;
    } catch (error) {
      throw new Error(`Erro ao criar o proprietário: ${error.message}`);
    }
  }

  async findProprietarios() {
    try {
      const proprietarios = await Proprietario.findAll();
      return proprietarios;
    } catch (error) {
      throw new Error("Erro ao buscar os proprietários: " + error.message);
    }
  }

  async findProprietarioById(id) {
    try {
      const proprietario = await Proprietario.findByPk(id);
      if (!proprietario) throw new Error("Proprietário não encontrado");
      return proprietario;
    } catch (error) {
      throw new Error("Erro ao buscar o proprietário: " + error.message);
    }
  }

  async updateProprietario(id, novoProprietario) {
    try {
      const proprietario = await Proprietario.findByPk(id);
      if (!proprietario) throw new Error("Proprietário não encontrado");
      await proprietario.update(novoProprietario);
      return proprietario;
    } catch (error) {
      throw new Error("Erro ao atualizar o proprietário: " + error.message);
    }
  }

  async deleteProprietario(id) {
    try {
      const proprietario = await Proprietario.findByPk(id);
      if (!proprietario) throw new Error("Proprietário não encontrado");
      await proprietario.destroy();
      return proprietario;
    } catch (error) {
      throw new Error("Erro ao deletar o proprietário: " + error.message);
    }
  }
}

module.exports = new ProprietarioService();
