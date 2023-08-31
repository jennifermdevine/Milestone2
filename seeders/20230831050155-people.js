'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('people',[
      {
        name:'Jennifer',
        protein:'beef'
      },
      {
        name:'Zoren',
        protein:'chicken'
      },
      {
        name:'Elva',
        protein:'pork'
      },
      {
        name:'Mathew',
        protein:'fish'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('people', null, {});
  }
};
