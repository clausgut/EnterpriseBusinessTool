'use strict';
module.exports = (sequelize, DataTypes) => {
  const inventory = sequelize.define('inventory', {
    name: DataTypes.STRING,
    serial_number: DataTypes.STRING,
    inventory: DataTypes.INTEGER,
    sales_number_item: DataTypes.INTEGER
  }, {});
  inventory.associate = function(models) {
    // associations can be defined here
  };
  return inventory;
};