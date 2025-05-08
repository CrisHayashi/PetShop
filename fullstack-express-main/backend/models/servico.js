module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Servico', {
    nome: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    preco: DataTypes.FLOAT
  });
};