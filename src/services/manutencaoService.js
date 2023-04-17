const Manutencao = require("../models/manutencao");

class ManutencaoService {
  constructor() {}

  async createManutencao(manutencao) {
    try {
      const novaManutencao = await Manutencao.create(manutencao);
      return novaManutencao;
    } catch (error) {
      throw new Error("Não foi possível criar a manutenção");
    }
  }

  async findManutencoes() {
    try {
      const manutencoes = await Manutencao.findAll();
      return manutencoes;
    } catch (error) {
      throw new Error("Não foi possível buscar as manutenções");
    }
  }

  async findManutencaoById(id) {
    try {
      const manutencao = await Manutencao.findByPk(id);
      if (!manutencao) throw new Error("Manutenção não encontrada");
      return manutencao;
    } catch (error) {
      throw new Error("Não foi possível buscar a manutenção");
    }
  }

  async updateManutencao(id, novaManutencao) {
    try {
      const manutencao = await Manutencao.findByPk(id);
      if (!manutencao) throw new Error("Manutenção não encontrada");
      await manutencao.update(novaManutencao);
      return manutencao;
    } catch (error) {
      throw new Error("Não foi possível atualizar a manutenção");
    }
  }

  async deleteManutencao(id) {
    try {
      const manutencao = await Manutencao.findByPk(id);
      if (!manutencao) throw new Error("Manutenção não encontrada");
      await manutencao.destroy();
      return manutencao;
    } catch (error) {
      throw new Error("Não foi possível deletar a manutenção");
    }
  }
}

module.exports = new ManutencaoService();
