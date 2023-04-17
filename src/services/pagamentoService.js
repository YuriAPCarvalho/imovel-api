const Pagamento = require("../models/pagamento");

class PagamentoService {
  constructor() {}

  async createPagamento(pagamento) {
    try {
      const novoPagamento = await Pagamento.create(pagamento);
      return novoPagamento;
    } catch (error) {
      throw new Error("Não foi possível criar o pagamento");
    }
  }

  async findPagamentos() {
    try {
      const pagamentos = await Pagamento.findAll();
      return pagamentos;
    } catch (error) {
      throw new Error("Não foi possível buscar os pagamentos");
    }
  }

  async findPagamentoById(id) {
    try {
      const pagamento = await Pagamento.findByPk(id);
      if (!pagamento) throw new Error("Pagamento não encontrado");
      return pagamento;
    } catch (error) {
      throw new Error("Não foi possível buscar o pagamento");
    }
  }

  async updatePagamento(id, novoPagamento) {
    try {
      const pagamento = await Pagamento.findByPk(id);
      if (!pagamento) throw new Error("Pagamento não encontrado");
      await pagamento.update(novoPagamento);
      return pagamento;
    } catch (error) {
      throw new Error("Não foi possível atualizar o pagamento");
    }
  }

  async deletePagamento(id) {
    try {
      const pagamento = await Pagamento.findByPk(id);
      if (!pagamento) throw new Error("Pagamento não encontrado");
      await pagamento.destroy();
      return pagamento;
    } catch (error) {
      throw new Error("Não foi possível deletar o pagamento");
    }
  }
}

module.exports = new PagamentoService();
