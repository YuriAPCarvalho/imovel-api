const express = require("express");
const router = express.Router();
const InquilinoService = require("../services/inquilinoService");

router.post("/", (req, res) => {
  const inquilino = req.body;
  const result = InquilinoService.createInquilino(inquilino);
  res.json(result);
});

router.get("/", (req, res) => {
  const result = InquilinoService.findInquilinos();
  res.json(result);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const result = InquilinoService.findInquilinoById(id);
  res.json(result);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const inquilino = req.body;
  const result = InquilinoService.updateInquilino(id, inquilino);
  res.json(result);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const result = InquilinoService.deleteInquilino(id);
  res.json(result);
});

module.exports = router;
