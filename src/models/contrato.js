const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const Contrato = sequelize.define("Contrato", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  duracao: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  dataInicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  condicoesEspecificas: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Contrato;
