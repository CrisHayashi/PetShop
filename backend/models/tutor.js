module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Tutor', {
    nome: DataTypes.STRING,
    contato: DataTypes.STRING,
    endereco: DataTypes.STRING
  });
};