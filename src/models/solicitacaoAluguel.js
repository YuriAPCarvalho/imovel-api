const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const SolicitacaoAluguel = sequelize.define("SolicitacaoAluguel", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  idInquilino: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idImovel: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  mensagem: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = SolicitacaoAluguel;
