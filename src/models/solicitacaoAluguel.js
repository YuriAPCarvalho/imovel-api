const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

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
  },
  {
    timestamps: false,
    tableName: "solicitacao_aluguel",
  }
);

module.exports = SolicitacaoAluguel;
