const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const Contrato = require("./contrato");
const Imobiliaria = require("./imobiliaria");

const Pagamento = sequelize.define(
  "Pagamento",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    valor: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    contratoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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

Contrato.hasMany(Pagamento, { foreignKey: "contratoId" });
Pagamento.belongsTo(Contrato, { foreignKey: "contratoId" });

Imobiliaria.hasMany(Pagamento, { foreignKey: "imobiliariaId" });
Pagamento.belongsTo(Imobiliaria, { foreignKey: "imobiliariaId" });

module.exports = Pagamento;
