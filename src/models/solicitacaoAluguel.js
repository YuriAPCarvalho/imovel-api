const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const Inquilino = require("./inquilino");
const Imovel = require("./imovel");

const SolicitacaoAluguel = sequelize.define(
  "SolicitacaoAluguel",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    inquilinoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imovelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    mensagem: {
      type: DataTypes.TEXT,
      allowNull: false,
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
  },
  { freezeTableName: true }
);

Inquilino.hasMany(SolicitacaoAluguel, { foreignKey: "inquilinoId" });
SolicitacaoAluguel.belongsTo(Inquilino, { foreignKey: "inquilinoId" });

Imovel.hasMany(SolicitacaoAluguel, { foreignKey: "imovelId" });
SolicitacaoAluguel.belongsTo(Imovel, { foreignKey: "imovelId" });

module.exports = SolicitacaoAluguel;
