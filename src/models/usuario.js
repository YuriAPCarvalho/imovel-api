const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const Usuario = sequelize.define(
  "Usuario",
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    perfil: {
      type: DataTypes.ENUM("cliente", "operador", "administrador"),
      allowNull: false,
      defaultValue: "cliente",
    },
  },
  { freezeTableName: true }
);

module.exports = Usuario;
