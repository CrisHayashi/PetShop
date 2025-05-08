const express = require('express');
const router = express.Router();
const { Servico } = require('../models');

router.get('/', async (req, res) => {
  const servicos = await Servico.findAll();
  res.json(servicos);
});

router.post('/', async (req, res) => {
  try {
    const servico = await Servico.create(req.body);
    res.status(201).json(servico);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;