'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Tasks', 
      [
        {
          name: 'Wash the dishes',
          status: false
        },
        {
          name: 'Do sports',
          status: true
        },
        {
          name: 'Rehearse report',
          status: true
        }
      ]
      , {});
     
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },

};
