'use strict';
module.exports = (sequelize, DataTypes) => {
  const schedule = sequelize.define('schedule', {
    hours: DataTypes.INTEGER,
    monday: DataTypes.STRING,
    tuesday: DataTypes.STRING,
    wednesday: DataTypes.STRING,
    thursday: DataTypes.STRING,
    friday: DataTypes.STRING,
    saturday: DataTypes.STRING,
    sunday: DataTypes.STRING
  }, {});
  schedule.associate = function(models) {
    // associations can be defined here
  };
  return schedule;
};