const express = require('express');
const router = express.Router();
const { Pet, Tutor } = require('../models');

router.get('/', async (req, res) => {
  const pets = await Pet.findAll({ include: Tutor });
  res.json(pets);
});

router.post('/', async (req, res) => {
  try {
    const pet = await Pet.create(req.body);
    res.status(201).json(pet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;