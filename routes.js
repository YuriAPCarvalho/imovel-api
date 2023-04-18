const express = require("express");
const router = express.Router();

const contratoRoutes = require("./src/routes/contratoRoutes");
const imovelRoutes = require("./src/routes/imovelRoutes");
const inquilinoRoutes = require("./src/routes/inquilinoRoutes");
const proprietarioRoutes = require("./src/routes/proprietarioRoutes");
const solicitacaoAluguelRoutes = require("./src/routes/solicitacaoAluguelRoutes");
const pagamentoRoutes = require("./src/routes/pagamentoRoutes");
const manutencaoRoutes = require("./src/routes/manutencaoRoutes");
const visitaRoutes = require("./src/routes/visitaRoutes");
const imobiliariaRoutes = require("./src/routes/imobiliariaRoutes");

router.use("/contrato", contratoRoutes);
router.use("/imovel", imovelRoutes);
router.use("/inquilino", inquilinoRoutes);
router.use("/proprietario", proprietarioRoutes);
router.use("/solicitacao-aluguel", solicitacaoAluguelRoutes);
router.use("/pagamento", pagamentoRoutes);
router.use("/manutencao", manutencaoRoutes);
router.use("/visita", visitaRoutes);
router.use("/imobiliaria", imobiliariaRoutes);

module.exports = router;
