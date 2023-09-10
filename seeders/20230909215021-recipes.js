'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('recipes',[
      {
        name:'spaghetti',
        img: 'https://th.bing.com/th/id/R.295597fccfee07f9352d352d07283a97?rik=V0dagYoUcjZT4A&riu=http%3a%2f%2fwww.cookingclassy.com%2fwp-content%2fuploads%2f2012%2f11%2fspaghetti%2bwith%2bmeat%2bsauce4.jpg&ehk=XHOi9s9o25f47RciCusMNEFbIIkSoPiT6f8EowvgATw%3d&risl=&pid=ImgRaw&r=0',
        protein:'beef',
        ing1:'beef',
        ing2:'noodles',
        ing3:'sauce',
        ing4:'',
        ing5:''
      },
      {
        name:'pot pie',
        img: 'https://www.cookingclassy.com/wp-content/uploads/2017/10/shortcut-chicken-pot-pie-8.jpg',
        protein:'chicken',
        ing1:'gravy',
        ing2:'dough',
        ing3:'peas',
        ing4:'carrots',
        ing5:''
      },
      {
        name:'rack of ribs',
        img:'https://th.bing.com/th/id/OIP.GoOOnW9e_WfG1xLwDfQvkgHaFR?pid=ImgDet&rs=1' ,
        protein:'pork',
        ing1:'butter',
        ing2:'bbq sauce',
        ing3:'honey',
        ing4:'',
        ing5:''
      },
      {
        name:'ceviche',
        img: 'https://www.chimuadventures.com/blog/wp-content/uploads/2016/06/Ceviche_Peru_shutterstock1.jpg',
        protein:'fish',
        ing1:'bell peppers',
        ing2:'lime juice',
        ing3:'tomatoe',
        ing4:'',
        ing5:''
        
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('recipes', null, {});
  }
};