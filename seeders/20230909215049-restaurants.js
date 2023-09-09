'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('restaurants',[
      {
        name:'Vegan haus',
        img: 'https://th.bing.com/th/id/R.040d295d97bbd4549078fc123086e64f?rik=s6Of3uMIASdCwg&pid=ImgRaw&r=0',
        protein: 'meatless',
        dish1:'brocolli',
        dish2:'beets',
        dish3:'celery'
      },
      {
        name:"Hell's Kitchen",
        img: 'https://th.bing.com/th/id/R.699ed863335a214e6ca04002922a78a8?rik=2ytuJzkA%2fUf%2bkQ&pid=ImgRaw&r=0',
        protein: 'beef',
        dish1:'Beef Wellington',
        dish2:'NY steak',
        dish3:'fillet mignon'
      },
      {
        name:'Old house BBQ',
        protein: 'pork',
        img:'https://th.bing.com/th/id/R.e49a3b1e18c2b27ca4c0c1980e44ccb3?rik=W0ubOv5OuHybkQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-YYmfiXnBQ9c%2fVVfOVUWGNuI%2fAAAAAAAAFNE%2fxYgZaibFWVI%2fs1600%2f0871.jpg&ehk=AIgdiXhR4H%2bqYNwMfxeRZwuDbKFedOtaxvSkpijq6lA%3d&risl=&pid=ImgRaw&r=0' ,
        dish1:'pork ribs',
        dish2:'bbq ribbletts',
        dish3:'shredded pork sandwhich'
      },
      {
        name:'The fishhouse',
        img: 'https://i.pinimg.com/originals/0b/a4/f6/0ba4f699c84775011671526c8522df77.jpg',
        protein: 'fish',
        dish1:'fillet',
        dish2:'civiche',
        dish3:'shrimp cocktail'
        
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('restaurants', null, {});
  }
};
