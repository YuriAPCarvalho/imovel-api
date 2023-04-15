const express = require("express");
const router = express.Router();
const InquilinoService = require("../services/inquilinoService");

router.post("/", async (req, res) => {
  const inquilino = req.body;
  const result = await InquilinoService.createInquilino(inquilino);
  res.json(result);
});

router.get("/", async (req, res) => {
  const result = await InquilinoService.findInquilinos();
  res.json(result);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await InquilinoService.findInquilinoById(id);
  res.json(result);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const inquilino = req.body;
  const result = await InquilinoService.updateInquilino(id, inquilino);
  res.json(result);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await InquilinoService.deleteInquilino(id);
  res.json(result);
});

module.exports = router;
