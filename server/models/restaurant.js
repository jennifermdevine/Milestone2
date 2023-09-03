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
    restaurant_id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
        } ,
    name: {
      type:DataTypes.STRING,
      allowNull: false
    },
    protein:{
      type:DataTypes.STRING,
      allowNull: false
    },
    year_founded: {
      type:DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Restaurant',
    tableName: 'restaurants',
    timestamps: false
  });
  return Restaurant;
};