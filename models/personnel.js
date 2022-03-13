'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class personnel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  personnel.init({
    phone: DataTypes.INTEGER,
    password: DataTypes.STRING,
    reset_passord: DataTypes.BOOLEAN,
    token: DataTypes.STRING,
    expires_in: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'personnel',
  });
  return personnel;
};