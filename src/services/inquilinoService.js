const Inquilino = require("../models/inquilino");
const { Op } = require("sequelize");

class InquilinoService {
  constructor() {}

  async createInquilino(inquilino) {
    try {
      const existingInquilino = await Inquilino.findOne({
        where: {
          [Op.or]: [{ cpf: inquilino.cpf }, { email: inquilino.email }],
        },
      });

      if (existingInquilino) {
        throw new Error("CPF ou e-mail já cadastrados");
      }

      const newInquilino = await Inquilino.create(inquilino);
      return newInquilino;
    } catch (error) {
      throw new Error(`Erro ao criar o inquilino: ${error.message}`);
    }
  }

  async findInquilinos() {
    try {
      const inquilinos = await Inquilino.findAll();
      return inquilinos;
    } catch (error) {
      throw new Error(`Erro ao buscar os inquilinos: ${error.message}`);
    }
  }

  async findInquilinoById(id) {
    try {
      const inquilino = await Inquilino.findByPk(id);
      if (!inquilino) throw new Error("Inquilino não encontrado");
      return inquilino;
    } catch (error) {
      throw new Error(`Erro ao buscar o inquilino: ${error.message}`);
    }
  }

  async updateInquilino(id, novoInquilino) {
    try {
      const inquilino = await Inquilino.findByPk(id);
      if (!inquilino) throw new Error("Inquilino não encontrado");
      await inquilino.update(novoInquilino);
      return inquilino;
    } catch (error) {
      throw new Error(`Erro ao atualizar o inquilino: ${error.message}`);
    }
  }

  async deleteInquilino(id) {
    try {
      const inquilino = await Inquilino.findByPk(id);
      if (!inquilino) throw new Error("Inquilino não encontrado");
      await inquilino.destroy();
      return inquilino;
    } catch (error) {
      throw new Error(`Erro ao deletar o inquilino: ${error.message}`);
    }
  }
}

module.exports = new InquilinoService();
