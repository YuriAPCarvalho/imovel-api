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
const GestaoContrato = require("./src/models/gestaoContrato");
const Pagamento = require("./src/models/pagamento");
const Manutencao = require("./src/models/manutencao");
const Visita = require("./src/models/visita");
const Imobiliaria = require("./src/models/imobiliaria");

// Associações
Proprietario.hasMany(Imovel, { foreignKey: "proprietarioId" });
Imovel.belongsTo(Proprietario, { foreignKey: "proprietarioId" });

Contrato.belongsTo(Inquilino, { foreignKey: "inquilinoId" });
Inquilino.hasMany(Contrato, { foreignKey: "inquilinoId" });

Contrato.belongsTo(Imovel, { foreignKey: "imovelId" });
Imovel.hasMany(Contrato, { foreignKey: "imovelId" });

Imovel.hasMany(SolicitacaoAluguel, { foreignKey: "imovelId" });
SolicitacaoAluguel.belongsTo(Imovel, { foreignKey: "imovelId" });

GestaoContrato.hasMany(Pagamento, { foreignKey: "gestaoContratoId" });
Pagamento.belongsTo(GestaoContrato, { foreignKey: "gestaoContratoId" });

Imovel.hasMany(Manutencao, { foreignKey: "imovelId" });
Manutencao.belongsTo(Imovel, { foreignKey: "imovelId" });

Contrato.hasMany(Manutencao, { foreignKey: "contratoId" });
Manutencao.belongsTo(Contrato, { foreignKey: "contratoId" });

Visita.belongsTo(Imovel, { foreignKey: "imovelId" });
Imovel.hasMany(Visita, { foreignKey: "imovelId" });

Visita.belongsTo(Inquilino, { foreignKey: "inquilinoId" });
Inquilino.hasMany(Visita, { foreignKey: "inquilinoId" });

Imobiliaria.hasMany(Imovel, { foreignKey: "imobiliariaId" });
Imovel.belongsTo(Imobiliaria, { foreignKey: "imobiliariaId" });

Imobiliaria.hasMany(Contrato, { foreignKey: "imobiliariaId" });
Contrato.belongsTo(Imobiliaria, { foreignKey: "imobiliariaId" });

Imobiliaria.hasMany(Manutencao, { foreignKey: "imobiliariaId" });
Manutencao.belongsTo(Imobiliaria, { foreignKey: "imobiliariaId" });

Imobiliaria.hasMany(Pagamento, { foreignKey: "imobiliariaId" });
Pagamento.belongsTo(Imobiliaria, { foreignKey: "imobiliariaId" });

Imobiliaria.hasMany(Visita, { foreignKey: "imobiliariaId" });
Visita.belongsTo(Imobiliaria, { foreignKey: "imobiliariaId" });

sequelize
  .sync()
  .then(() => {
    console.log("Tabelas criadas no banco de dados");
  })
  .catch((error) => {
    console.log("Erro ao criar tabelas no banco de dados", error);
  });

module.exports = sequelize;
