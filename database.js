const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("aluguel_db", "postgres", "postgres_2804$", {
  host: "191.252.210.189",
  dialect: "postgres",
});

module.exports = {
  Sequelize,
  DataTypes: Sequelize.DataTypes,
  Model: Sequelize.Model,
  sequelize,
};

const Imovel = require("./src/models/imovel");
const Inquilino = require("./src/models/inquilino");
const Proprietario = require("./src/models/proprietario");
const Contrato = require("./src/models/contrato");

// Associações
Proprietario.hasMany(Imovel, { foreignKey: "proprietarioId" });
Imovel.belongsTo(Proprietario, { foreignKey: "proprietarioId" });

Contrato.belongsTo(Inquilino, { foreignKey: "inquilinoId" });
Inquilino.hasMany(Contrato, { foreignKey: "inquilinoId" });

Contrato.belongsTo(Imovel, { foreignKey: "imovelId" });
Imovel.hasMany(Contrato, { foreignKey: "imovelId" });

sequelize
  .sync()
  .then(() => {
    console.log("Tabelas criadas no banco de dados");
  })
  .catch((error) => {
    console.log("Erro ao criar tabelas no banco de dados", error);
  });

module.exports = sequelize;
