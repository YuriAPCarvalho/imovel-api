const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const Imovel = require("./imovel");
const Imobiliaria = require("./imobiliaria");

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
    imovelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Imovel",
        key: "id",
      },
    },
    imobiliariaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Imobiliaria",
        key: "id",
      },
    },
  },
  { freezeTableName: true }
);

Imovel.hasMany(Manutencao, { foreignKey: "imovelId" });
Manutencao.belongsTo(Imovel, { foreignKey: "imovelId" });

Imobiliaria.hasMany(Manutencao, { foreignKey: "imobiliariaId" });
Manutencao.belongsTo(Imobiliaria, { foreignKey: "imobiliariaId" });

module.exports = Manutencao;
