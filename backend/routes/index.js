var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Bem-vindo a API da aplicação X' });
});

module.exports = router;
