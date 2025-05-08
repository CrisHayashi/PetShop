const db = require('./models');

// Associações
const { Tutor, Pet, Servico, Agendamento } = db;

Tutor.hasMany(Pet);
Pet.belongsTo(Tutor);

Tutor.hasMany(Agendamento);
Pet.hasMany(Agendamento);
Servico.hasMany(Agendamento);

Agendamento.belongsTo(Tutor);
Agendamento.belongsTo(Pet);
Agendamento.belongsTo(Servico);

db.sequelize.sync({ force: false }).then(() => {
  console.log('Banco sincronizado!');
});
