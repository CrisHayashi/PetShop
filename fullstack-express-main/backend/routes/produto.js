const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { Produto } = require('../models');
const { Op } = require('sequelize');

// GET /api/produtos
router.get('/', async (req, res) => {
  const produtos = await Produto.findAll({
    where: { estoque: { [Op.gt]: 0 } }
  });
  res.json(produtos);
});

// POST /api/produtos
router.post(
  '/',
  [
    body('nome').notEmpty(),
    body('categoria').notEmpty(),
    body('marca').notEmpty(),
    body('preco').isFloat({ gt: 0 }),
    body('estoque').isInt({ min: 0 }),
    body('codigo_barras').notEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
      const novo = await Produto.create(req.body);
      res.status(201).json(novo);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
);

module.exports = router;
