const express = require("express");
const router = express.Router();

const contratoRoutes = require("./src/routes/contrato");
const imovelRoutes = require("./src/routes/imovel");
const inquilinoRoutes = require("./src/routes/inquilino");
const proprietarioRoutes = require("./src/routes/proprietario");

router.use("/contrato", contratoRoutes);
router.use("/imovel", imovelRoutes);
router.use("/inquilino", inquilinoRoutes);
router.use("/proprietario", proprietarioRoutes);

module.exports = router;
