const express = require("express");
const router = express.Router();

const contratoRoutes = require("./src/routes/contratoRoutes");
const imovelRoutes = require("./src/routes/imovelRoutes");
const inquilinoRoutes = require("./src/routes/inquilinoRoutes");
const proprietarioRoutes = require("./src/routes/proprietarioRoutes");
const solicitacaoAluguelRoutes = require("./src/routes/solicitacaoAluguelRoutes");
const gestaoContratoRoutes = require("./src/routes/gestaoContratoRoutes");

router.use("/contrato", contratoRoutes);
router.use("/imovel", imovelRoutes);
router.use("/inquilino", inquilinoRoutes);
router.use("/proprietario", proprietarioRoutes);
router.use("/solicitacao-aluguel", solicitacaoAluguelRoutes);
router.use("/gestao-contrato", gestaoContratoRoutes);

module.exports = router;
