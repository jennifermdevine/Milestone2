'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('people', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      protein: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('people');
  }
};