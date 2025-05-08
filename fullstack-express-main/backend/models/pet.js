module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Pet', {
    nome: DataTypes.STRING,
    especie: DataTypes.STRING,
    raca: DataTypes.STRING,
    idade: DataTypes.INTEGER
  });
};