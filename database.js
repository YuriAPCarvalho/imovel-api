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

sequelize
  .sync()
  .then(() => {
    console.log("Tabelas criadas no banco de dados");
  })
  .catch((error) => {
    console.log("Erro ao criar tabelas no banco de dados", error);
  });
