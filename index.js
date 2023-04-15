const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Importa e executa o arquivo database.js
require("./database");

// Configura o middleware body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Importa as rotas da aplicação
const routes = require("./routes");

// Configura as rotas da aplicação
app.use("/", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
