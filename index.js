require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT;
const cors = require("cors");



app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
});

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

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
