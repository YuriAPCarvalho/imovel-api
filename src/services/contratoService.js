const Contrato = require("../models/contrato");

class ContratoService {
  constructor() {
    this.contratos = [];
  }

  async createContrato(contratoData) {
    try {
      const contrato = await Contrato.create(contratoData);
      return contrato;
    } catch (error) {
      console.log("Erro ao criar contrato:", error);
      return null;
    }
  }

  async findContratos() {
    try {
      const contratos = await Contrato.findAll();
      return contratos;
    } catch (error) {
      console.log("Erro ao buscar contratos:", error);
      return null;
    }
  }

  async findContratoById(id) {
    try {
      const contrato = await Contrato.findByPk(id);
      return contrato;
    } catch (error) {
      console.log("Erro ao buscar contrato:", error);
      return null;
    }
  }

  async updateContrato(id, contratoData) {
    try {
      await Contrato.update(contratoData, {
        where: { id },
      });
      const contratoAtualizado = await Contrato.findByPk(id);
      return contratoAtualizado;
    } catch (error) {
      console.log("Erro ao atualizar contrato:", error);
      return null;
    }
  }

  async deleteContrato(id) {
    try {
      const contratoDeletado = await Contrato.findByPk(id);
      await Contrato.destroy({
        where: { id },
      });
      return contratoDeletado;
    } catch (error) {
      console.log("Erro ao deletar contrato:", error);
      return null;
    }
  }
}

module.exports = new ContratoService();
