const express = require('express');
const router = express.Router();
const { Tutor } = require('../models');

router.get('/', async (req, res) => {
  const tutores = await Tutor.findAll();
  res.json(tutores);
});

router.post('/', async (req, res) => {
  try {
    const tutor = await Tutor.create(req.body);
    res.status(201).json(tutor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
