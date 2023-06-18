const Permissao = require("../models/permissao");
const { Op } = require("sequelize");

class PermissaoService {
  constructor() {}

  async createPermissao(permissao) {
    try {
      const existingPermissao = await Permissao.findOne({
        where: {
          [Op.or]: [{ nome: permissao.nome }],
        },
      });
      if (existingPermissao) {
        throw new Error("Permissão já cadastrada");
      }

      const novaPermissao = await Permissao.create(permissao);
      return novaPermissao;
    } catch (error) {
      throw new Error(`Não foi possível criar a permissão ${error.message}`);
    }
  }

  async findPermissoes() {
    try {
      const permissoes = await Permissao.findAll();
      return permissoes;
    } catch (error) {
      throw new Error("Não foi possível buscar as permissões");
    }
  }

  async findPermissaoById(id) {
    try {
      const permissao = await Permissao.findByPk(id);
      if (!permissao) throw new Error("Permissão não encontrada");
      return permissao;
    } catch (error) {
      throw new Error("Não foi possível buscar a permissão");
    }
  }

  async updatePermissao(id, novaPermissao) {
    try {
      const permissao = await Permissao.findByPk(id);
      if (!permissao) throw new Error("Permissão não encontrada");
      await permissao.update(novaPermissao);
      return permissao;
    } catch (error) {
      throw new Error("Não foi possível atualizar a permissão");
    }
  }

  async deletePermissao(id) {
    try {
      if (id == 1 || id == 2) {
        throw new Error("Não é possível excluir essa permissão.");
      }
      const permissao = await Permissao.findByPk(id);
      if (!permissao) throw new Error("Permissão não encontrada");
      await permissao.destroy();
      return permissao;
    } catch (error) {
      throw new Error("Não foi possível deletar a permissão: " + error.message);
    }
  }
}

module.exports = new PermissaoService();
