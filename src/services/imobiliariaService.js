const Imobiliaria = require("../models/imobiliaria");

class ImobiliariaService {
  constructor() {}

  async createImobiliaria(imobiliaria) {
    try {
      const novaImobiliaria = await Imobiliaria.create(imobiliaria);
      return novaImobiliaria;
    } catch (error) {
      throw new Error("Não foi possível criar a imobiliária");
    }
  }

  async findImobiliarias() {
    try {
      const imobiliarias = await Imobiliaria.findAll();
      return imobiliarias;
    } catch (error) {
      throw new Error("Não foi possível buscar as imobiliárias");
    }
  }

  async findImobiliariaById(id) {
    try {
      const imobiliaria = await Imobiliaria.findByPk(id);
      if (!imobiliaria) throw new Error("Imobiliária não encontrada");
      return imobiliaria;
    } catch (error) {
      throw new Error("Não foi possível buscar a imobiliária");
    }
  }

  async updateImobiliaria(id, novaImobiliaria) {
    try {
      const imobiliaria = await Imobiliaria.findByPk(id);
      if (!imobiliaria) throw new Error("Imobiliária não encontrada");
      await imobiliaria.update(novaImobiliaria);
      return imobiliaria;
    } catch (error) {
      throw new Error("Não foi possível atualizar a imobiliária");
    }
  }

  async deleteImobiliaria(id) {
    try {
      const imobiliaria = await Imobiliaria.findByPk(id);
      if (!imobiliaria) throw new Error("Imobiliária não encontrada");
      await imobiliaria.destroy();
      return imobiliaria;
    } catch (error) {
      throw new Error("Não foi possível deletar a imobiliária");
    }
  }
}

module.exports = new ImobiliariaService();
