const SolicitacaoAluguel = require("../models/solicitacaoAluguel");

class SolicitacaoAluguelService {
  constructor() {}

  async createSolicitacaoAluguel(solicitacao) {
    try {
      const novaSolicitacao = await SolicitacaoAluguel.create(solicitacao);
      return novaSolicitacao;
    } catch (error) {
      throw new Error("Não foi possível criar a solicitação de aluguel");
    }
  }

  async findSolicitacoesAluguel() {
    try {
      const solicitacoes = await SolicitacaoAluguel.findAll();
      return solicitacoes;
    } catch (error) {
      throw new Error("Não foi possível buscar as solicitações de aluguel");
    }
  }

  async findSolicitacaoAluguelById(id) {
    try {
      const solicitacao = await SolicitacaoAluguel.findByPk(id);
      if (!solicitacao)
        throw new Error("Solicitação de aluguel não encontrada");
      return solicitacao;
    } catch (error) {
      throw new Error("Não foi possível buscar a solicitação de aluguel");
    }
  }

  async updateSolicitacaoAluguel(id, novaSolicitacao) {
    try {
      const solicitacao = await SolicitacaoAluguel.findByPk(id);
      if (!solicitacao)
        throw new Error("Solicitação de aluguel não encontrada");
      await solicitacao.update(novaSolicitacao);
      return solicitacao;
    } catch (error) {
      throw new Error("Não foi possível atualizar a solicitação de aluguel");
    }
  }

  async deleteSolicitacaoAluguel(id) {
    try {
      const solicitacao = await SolicitacaoAluguel.findByPk(id);
      if (!solicitacao)
        throw new Error("Solicitação de aluguel não encontrada");
      await solicitacao.destroy();
      return solicitacao;
    } catch (error) {
      throw new Error("Não foi possível deletar a solicitação de aluguel");
    }
  }
}

module.exports = new SolicitacaoAluguelService();
