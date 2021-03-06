const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV1,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dishSummary: {
      type: DataTypes.STRING,
    },
    punctuation: {
      type: DataTypes.INTEGER
    },
    healthyFoodLevel: {
      type: DataTypes.INTEGER
    },
    stepByStep: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.TEXT
    }
  });
};
