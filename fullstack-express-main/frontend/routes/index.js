var express = require('express');
var router = express.Router();


var url = process.env.URL_API;

/* GET home page. */
router.get('/', function (req, res, next) {

  console.log('eveno aqui', )

  fetch(url + "students") // Corrigido para usar a variável `url` corretamente
    .then((res) => {
      return res.json()
    })
    .then((students) => { 
      console.log('veio ele', students) 
      res.render('index', { students });
    })

});

module.exports = router;
