const Avaliacao = require("../models/avaliacao");

class AvaliacaoService {
  constructor() {}

  async createAvaliacao(avaliacao) {
    try {
      const novaAvaliacao = await Avaliacao.create(avaliacao);
      return novaAvaliacao;
    } catch (error) {
      throw new Error("Não foi possível criar a avaliacao");
    }
  }

  async findAvaliacao() {
    try {
      const avaliacoes = await Avaliacao.findAll();
      return avaliacoes;
    } catch (error) {
      throw new Error("Não foi possível buscar as avaliacoes");
    }
  }

  async findAvaliacaoById(id) {
    try {
      const avaliacao = await Avaliacao.findByPk(id);
      if (!avaliacao) throw new Error("Visita não encontrada");
      return avaliacao;
    } catch (error) {
      throw new Error("Não foi possível buscar a avaliacao");
    }
  }

  async updateAvaliacao(id, novaAvaliacao) {
    try {
      const avaliacao = await Avaliacao.findByPk(id);
      if (!avaliacao) throw new Error("Visita não encontrada");
      await avaliacao.update(novaAvaliacao);
      return avaliacao;
    } catch (error) {
      throw new Error("Não foi possível atualizar a avaliacao");
    }
  }

  async deleteAvaliacao(id) {
    try {
      const avaliacao = await Avaliacao.findByPk(id);
      if (!avaliacao) throw new Error("Visita não encontrada");
      await avaliacao.destroy();
      return avaliacao;
    } catch (error) {
      throw new Error("Não foi possível deletar a avaliacao");
    }
  }
}

module.exports = new AvaliacaoService();
