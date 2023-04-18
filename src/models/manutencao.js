const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const Imovel = require("./imovel");
const Contrato = require("./contrato");
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
    contratoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Contrato",
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

Contrato.hasMany(Manutencao, { foreignKey: "contratoId" });
Manutencao.belongsTo(Contrato, { foreignKey: "contratoId" });

Imobiliaria.hasMany(Manutencao, { foreignKey: "imobiliariaId" });
Manutencao.belongsTo(Imobiliaria, { foreignKey: "imobiliariaId" });

module.exports = Manutencao;
