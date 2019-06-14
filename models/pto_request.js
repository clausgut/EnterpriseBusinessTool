'use strict';
module.exports = (sequelize, DataTypes) => {
  const PTO_request = sequelize.define('PTO_request', {
    employee_name: DataTypes.STRING,
    requested_dates: DataTypes.STRING,
    comment: DataTypes.STRING
  }, {});
  PTO_request.associate = function(models) {
    // associations can be defined here
  };
  return PTO_request;
};