'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('recipes',[
      {
        name:'spaghetti',
        protein:'beef'
      },
      {
        name:'pot pie',
        protein:'chicken'
      },
      {
        name:'rack of ribs',
        protein:'pork'
      },
      {
        name:'ceviche',
        protein:'fish'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('recipes', null, {});
  }
};
