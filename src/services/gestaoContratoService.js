const GestaoContrato = require("../models/gestaoContrato");

class GestaoContratoService {
  constructor() {}

  async createGestaoContrato(gestaoContrato) {
    try {
      const novoGestaoContrato = await GestaoContrato.create(gestaoContrato);
      return novoGestaoContrato;
    } catch (error) {
      throw new Error("Não foi possível criar a gestão de contrato");
    }
  }

  async findGestaoContratos() {
    try {
      const gestaoContratos = await GestaoContrato.findAll();
      return gestaoContratos;
    } catch (error) {
      throw new Error("Não foi possível buscar as gestões de contrato");
    }
  }

  async findGestaoContratoById(id) {
    try {
      const gestaoContrato = await GestaoContrato.findByPk(id);
      if (!gestaoContrato) throw new Error("Gestão de contrato não encontrada");
      return gestaoContrato;
    } catch (error) {
      throw new Error("Não foi possível buscar a gestão de contrato");
    }
  }

  async updateGestaoContrato(id, novaGestaoContrato) {
    try {
      const gestaoContrato = await GestaoContrato.findByPk(id);
      if (!gestaoContrato) throw new Error("Gestão de contrato não encontrada");
      await gestaoContrato.update(novaGestaoContrato);
      return gestaoContrato;
    } catch (error) {
      throw new Error("Não foi possível atualizar a gestão de contrato");
    }
  }

  async deleteGestaoContrato(id) {
    try {
      const gestaoContrato = await GestaoContrato.findByPk(id);
      if (!gestaoContrato) throw new Error("Gestão de contrato não encontrada");
      await gestaoContrato.destroy();
      return gestaoContrato;
    } catch (error) {
      throw new Error("Não foi possível deletar a gestão de contrato");
    }
  }
}

module.exports = new GestaoContratoService();
