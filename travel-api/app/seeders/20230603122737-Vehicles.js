'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Vehicles', [
      {
        type_id: 1,
        kapasitas: 10,
        harga: 800000,
        kategori_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 1,
        kapasitas: 15,
        harga: 900000,
        kategori_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 2,
        kapasitas: 20,
        harga: 1000000,
        kategori_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 2,
        kapasitas: 30,
        harga: 1300000,
        kategori_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 2,
        kapasitas: 40,
        harga: 1500000,
        kategori_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Vehicles', null, {});
  },
};
