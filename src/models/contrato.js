const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const Inquilino = require("./inquilino");
const Imovel = require("./imovel");
const Imobiliaria = require("./imobiliaria");

const Contrato = sequelize.define(
  "Contrato",
  {
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
    inquilinoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Inquilino,
        key: "id",
      },
    },
    imovelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Imovel,
        key: "id",
      },
    },
    imobiliariaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Imobiliaria,
        key: "id",
      },
    },
  },
  { freezeTableName: true }
);

Inquilino.hasMany(Contrato, { foreignKey: "inquilinoId" });
Contrato.belongsTo(Inquilino, { foreignKey: "inquilinoId" });

Imovel.hasMany(Contrato, { foreignKey: "imovelId" });
Contrato.belongsTo(Imovel, { foreignKey: "imovelId" });

Imobiliaria.hasMany(Contrato, { foreignKey: "imobiliariaId" });
Contrato.belongsTo(Imobiliaria, { foreignKey: "imobiliariaId" });

module.exports = Contrato;
