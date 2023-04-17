const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const Manutencao = sequelize.define(
  "Manutencao",
  {
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
    valor: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "manutencao",
  }
);
module.exports = Manutencao;
