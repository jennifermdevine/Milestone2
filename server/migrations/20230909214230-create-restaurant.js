'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('restaurants', {
      restaurant_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      img: {
        type: Sequelize.STRING,
        allowNull:false
      },
      protein: {
        type: Sequelize.STRING,
        allowNull:false
      },
      dish1: {
        type: Sequelize.STRING,
        allowNull:false
      },
      dish2: {
        type: Sequelize.STRING,
        allowNull:false
      },
      dish3: {
        type: Sequelize.STRING,
        allowNull:false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('restaurants');
  }
};