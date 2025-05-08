module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Produto', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false
    },
    preco: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: { min: 0 }
    },
    estoque: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 0 }
    },
    codigo_barras: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  });
};
