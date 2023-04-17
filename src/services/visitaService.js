const Visita = require("../models/visita");

class VisitaService {
  constructor() {}

  async createVisita(visita) {
    try {
      const novaVisita = await Visita.create(visita);
      return novaVisita;
    } catch (error) {
      throw new Error("Não foi possível criar a visita");
    }
  }

  async findVisitas() {
    try {
      const visitas = await Visita.findAll();
      return visitas;
    } catch (error) {
      throw new Error("Não foi possível buscar as visitas");
    }
  }

  async findVisitaById(id) {
    try {
      const visita = await Visita.findByPk(id);
      if (!visita) throw new Error("Visita não encontrada");
      return visita;
    } catch (error) {
      throw new Error("Não foi possível buscar a visita");
    }
  }

  async updateVisita(id, novaVisita) {
    try {
      const visita = await Visita.findByPk(id);
      if (!visita) throw new Error("Visita não encontrada");
      await visita.update(novaVisita);
      return visita;
    } catch (error) {
      throw new Error("Não foi possível atualizar a visita");
    }
  }

  async deleteVisita(id) {
    try {
      const visita = await Visita.findByPk(id);
      if (!visita) throw new Error("Visita não encontrada");
      await visita.destroy();
      return visita;
    } catch (error) {
      throw new Error("Não foi possível deletar a visita");
    }
  }
}

module.exports = new VisitaService();
