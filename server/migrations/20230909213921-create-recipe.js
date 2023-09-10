'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('recipes', {
      recipe_id: {
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
      ing1: {
        type: Sequelize.STRING,
        allowNull:false
      },
      ing2: {
        type: Sequelize.STRING,
        allowNull:false
      },
      ing3: {
        type: Sequelize.STRING,
        allowNull:false
      },
      ing4: {
        type: Sequelize.STRING,
        allowNull:false
      },
      ing5: {
        type: Sequelize.STRING,
        allowNull:false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('recipes');
  }
};