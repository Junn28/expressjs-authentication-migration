'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [
      {
        kategori: 'Junior',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        kategori: 'Medium',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        kategori: 'Big',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Categories', null, {});
  },
};
