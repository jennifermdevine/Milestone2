'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('restaurants', [
      {
        name: "Thai 4ever",
        protein: "beef",
        year_founded: 2014
      },
      {
        name: "China Town Special",
        protein: "chicken",
        year_founded: 1993
      },
      {
        name: "Southern BBQ",
        protein: "pork",
        year_founded: 2002
      },
      {
        name: "Ramsey Fish House",
        protein: "fish",
        year_founded: 2010
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('restaurant', null, {});
  }
};
