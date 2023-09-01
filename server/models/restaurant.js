'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Restaurant.init({
    Restaurant_id:{
      type: DataTypes.SMALLINT,
      primaryKey:true,
      autoIncrement:true
    } ,
    name:{
      type: DataTypes.STRING,
      allowNull:false
    } ,
    cuisine:{
      type: DataTypes.STRING,
      allowNull:false
    } ,
    year_founded:{
      type:DataTypes.SMALLINT,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Restaurant',
    tableName: 'restaurant',
    timeStamps:false
  });
  return Restaurant;
};