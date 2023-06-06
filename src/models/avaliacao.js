const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const Imovel = require("./imovel");

const Avaliacao = sequelize.define(
  "Avaliacao",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    avaliacao: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    satisfacao: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imovelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Imovel,
        key: "id",
      },
    },
  },
  { freezeTableName: true }
);

Imovel.belongsTo(Avaliacao, { foreignKey: "ImovelId" });
Avaliacao.hasMany(Imovel, { foreignKey: "ImovelId" });

module.exports = Avaliacao;
