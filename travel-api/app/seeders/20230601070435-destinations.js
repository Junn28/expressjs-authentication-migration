'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Destinations', [
      {
        kota: 'Jakarta',
        harga: 15000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        kota: 'Bandung',
        harga: 15000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        kota: 'Yogyakarta',
        harga: 20000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        kota: 'Semarang',
        harga: 20000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        kota: 'Solo',
        harga: 20000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Destinations', null, {});
  },
};
