'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  data.init({
    longitude: DataTypes.STRING,
    latitude: DataTypes.STRING,
    brand: DataTypes.STRING,
    time: DataTypes.DATE,
    user_count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'data',
  });
  return data;
};