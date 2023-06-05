const Manutencao = require("../models/manutencao");

class ManutencaoService {
  constructor() {}

  async createManutencao(manutencao) {
    try {
      const novaManutencao = await Manutencao.create(manutencao);
      return novaManutencao;
    } catch (error) {
      throw new Error(`Erro ao criar a manutenção: ${error.message}`);
    }
  }

  async findManutencoes() {
    try {
      const manutencoes = await Manutencao.findAll();
      return manutencoes;
    } catch (error) {
      throw new Error(`Erro ao buscar as manutenções: ${error.message}`);
    }
  }

  async findManutencaoById(id) {
    try {
      const manutencao = await Manutencao.findByPk(id);
      if (!manutencao) throw new Error("Manutenção não encontrada");
      return manutencao;
    } catch (error) {
      throw new Error(`Erro ao buscar a manutenção: ${error.message}`);
    }
  }

  async updateManutencao(id, novaManutencao) {
    try {
      const manutencao = await Manutencao.findByPk(id);
      if (!manutencao) throw new Error("Manutenção não encontrada");
      await manutencao.update(novaManutencao);
      return manutencao;
    } catch (error) {
      throw new Error(`Erro ao atualizar a manutenção: ${error.message}`);
    }
  }

  async deleteManutencao(id) {
    try {
      const manutencao = await Manutencao.findByPk(id);
      if (!manutencao) throw new Error("Manutenção não encontrada");
      await manutencao.destroy();
      return manutencao;
    } catch (error) {
      throw new Error(`Erro ao deletar a manutenção: ${error.message}`);
    }
  }
}

module.exports = new ManutencaoService();
