const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const Inquilino = sequelize.define(
  "Inquilino",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dadosFinanceiros: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "inquilino",
  }
);

module.exports = Inquilino;
