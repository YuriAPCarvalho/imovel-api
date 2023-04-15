const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const Imovel = sequelize.define("Imovel", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  area: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quartos: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  fotos: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
});

module.exports = Imovel;
