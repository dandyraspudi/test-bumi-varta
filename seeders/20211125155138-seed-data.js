'use strict';
const data = require('../data.json');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    data.forEach(item => {
      item.createdAt = new Date()
      item.updatedAt = new Date()
    })

    await queryInterface.bulkInsert('data', data)
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('data', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
