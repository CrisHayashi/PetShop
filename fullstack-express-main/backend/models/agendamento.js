module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Agendamento', {
    dataHora: DataTypes.DATE,
    status: DataTypes.STRING
  });
};