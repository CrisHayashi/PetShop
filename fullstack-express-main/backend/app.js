var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tutoresRouter = require('./routes/tutores');
var petsRouter = require('./routes/pets');
var produtosRouter = require('./routes/produto');
var servicosRouter = require('./routes/servicos');
var agendamentosRouter = require('./routes/agendamentos');
var studentsRouter = require('./routes/students');

// middleware de autenticação
var auth = require('./middleware/auth');

var app = express();

app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Rotas públicas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/produtos', produtosRouter);  // listagem de produtos sem login
app.use('/api/servicos', servicosRouter);  // listagem de serviços sem login
app.use('/students', studentsRouter);

// Rotas protegidas com JWT
app.use('/api/tutores', auth, tutoresRouter);
app.use('/api/pets', auth, petsRouter);
app.use('/api/agendamentos', auth, agendamentosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
