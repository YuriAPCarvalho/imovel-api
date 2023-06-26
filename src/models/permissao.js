const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");
const Usuario = require("./usuario");

const Permissao = sequelize.define(
  "Permissao",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    visitas: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    proprietarios: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    imobiliarias: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    imoveis: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    inquilinos: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    contratos: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    manutencao: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    avaliacao: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    usuarios: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    perfil: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  { freezeTableName: true }
);

Usuario.hasMany(Permissao, { foreignKey: "perfil" });
Permissao.belongsTo(Usuario, { foreignKey: "perfil" });

module.exports = Permissao;
