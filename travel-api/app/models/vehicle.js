'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vehicle.hasMany(models.Order, {
        foreignKey: 'kendaraan_id',
      });
      Vehicle.belongsTo(models.Category);
      Vehicle.belongsTo(models.TypeVehicles);
    }
  }
  Vehicle.init(
    {
      type_id: DataTypes.INTEGER,
      kapasitas: DataTypes.INTEGER,
      harga: DataTypes.INTEGER,
      kategori_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Vehicle',
    }
  );
  return Vehicle;
};
