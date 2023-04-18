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
const SolicitacaoAluguel = require("./src/models/solicitacaoAluguel");
const Pagamento = require("./src/models/pagamento");
const Manutencao = require("./src/models/manutencao");
const Visita = require("./src/models/visita");
const Imobiliaria = require("./src/models/imobiliaria");

// Associações

sequelize
  .sync()
  .then(() => {
    console.log("Tabelas criadas no banco de dados");
  })
  .catch((error) => {
    console.log("Erro ao criar tabelas no banco de dados", error);
  });

module.exports = sequelize;
