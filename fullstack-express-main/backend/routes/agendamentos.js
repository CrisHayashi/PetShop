const express = require('express');
const router = express.Router();
const { Agendamento, Tutor, Pet, Servico } = require('../models');

router.get('/', async (req, res) => {
  const agendamentos = await Agendamento.findAll({
    include: [Tutor, Pet, Servico]
  });
  res.json(agendamentos);
});

router.post('/', async (req, res) => {
  try {
    const agendamento = await Agendamento.create(req.body);
    res.status(201).json(agendamento);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;