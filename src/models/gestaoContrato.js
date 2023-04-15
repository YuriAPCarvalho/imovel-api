const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const GestaoContrato = sequelize.define("GestaoContrato", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = GestaoContrato;
