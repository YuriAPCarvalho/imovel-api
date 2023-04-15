const Imovel = require("../models/imovel");

class ImovelService {
  async createImovel(imovel) {
    try {
      const newImovel = await Imovel.create(imovel);
      return newImovel;
    } catch (error) {
      throw new Error(`Erro ao criar imóvel: ${error.message}`);
    }
  }

  async findImoveis() {
    try {
      const imoveis = await Imovel.findAll();
      return imoveis;
    } catch (error) {
      throw new Error(`Erro ao buscar imóveis: ${error.message}`);
    }
  }

  async findImovelById(id) {
    try {
      const imovel = await Imovel.findByPk(id);
      if (!imovel) throw new Error("Imóvel não encontrado");
      return imovel;
    } catch (error) {
      throw new Error(`Erro ao buscar imóvel: ${error.message}`);
    }
  }

  async updateImovel(id, imovel) {
    try {
      const imovelExists = await this.findImovelById(id);
      if (!imovelExists) throw new Error("Imóvel não encontrado");
      const updatedImovel = await imovelExists.update(imovel);
      return updatedImovel;
    } catch (error) {
      throw new Error(`Erro ao atualizar imóvel: ${error.message}`);
    }
  }

  async deleteImovel(id) {
    try {
      const imovelExists = await this.findImovelById(id);
      if (!imovelExists) throw new Error("Imóvel não encontrado");
      await imovelExists.destroy();
    } catch (error) {
      throw new Error(`Erro ao deletar imóvel: ${error.message}`);
    }
  }
}

module.exports = new ImovelService();
