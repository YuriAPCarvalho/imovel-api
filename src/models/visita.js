const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const Inquilino = require("./inquilino");
const Imovel = require("./imovel");
const Imobiliaria = require("./imobiliaria");

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
    inquilinoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Inquilino",
        key: "id",
      },
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

Inquilino.hasMany(Visita, { foreignKey: "inquilinoId" });
Visita.belongsTo(Inquilino, { foreignKey: "inquilinoId" });

Imovel.hasMany(Visita, { foreignKey: "imovelId" });
Visita.belongsTo(Imovel, { foreignKey: "imovelId" });

Imobiliaria.hasMany(Visita, { foreignKey: "imobiliariaId" });
Visita.belongsTo(Imobiliaria, { foreignKey: "imobiliariaId" });

module.exports = Visita;
