'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('TypeVehicles', [
      {
        type: 'mobil',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'bis',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('TypeVehicles', null, {});
  },
};
