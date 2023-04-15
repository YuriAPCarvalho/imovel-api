const Inquilino = require("../models/inquilino");

class InquilinoService {
  async createInquilino(inquilino) {
    try {
      const newInquilino = await Inquilino.create(inquilino);
      return newInquilino;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findInquilinos() {
    try {
      const inquilinos = await Inquilino.findAll();
      return inquilinos;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async updateInquilino(id, inquilino) {
    try {
      const [updatedRowsCount, updatedRows] = await Inquilino.update(
        inquilino,
        {
          where: {
            id: id,
          },
          returning: true,
        }
      );
      if (updatedRowsCount == 0) {
        throw new Error("Inquilino não encontrado");
      }
      return updatedRows[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async deleteInquilino(id) {
    try {
      const deletedRowCount = await Inquilino.destroy({
        where: {
          id: id,
        },
      });
      if (deletedRowCount == 0) {
        throw new Error("Inquilino não encontrado");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = new InquilinoService();
