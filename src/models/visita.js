const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const Visita = sequelize.define(
  "Visita",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    dataHora: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    inquilinoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imovelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    observacao: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    tableName: "visita",
  }
);

module.exports = Visita;
