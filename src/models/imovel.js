const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const Proprietario = require("./Proprietario");
const Imobiliaria = require("./imobiliaria");

const Imovel = sequelize.define(
  "Imovel",
  {
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
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    imagem: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    proprietarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Proprietario,
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

Imovel.belongsTo(Proprietario, { foreignKey: "proprietarioId" });
Proprietario.hasMany(Imovel, { foreignKey: "proprietarioId" });

Imovel.belongsTo(Imobiliaria, { foreignKey: "imobiliariaId" });
Imobiliaria.hasMany(Imovel, { foreignKey: "imobiliariaId" });

module.exports = Imovel;
