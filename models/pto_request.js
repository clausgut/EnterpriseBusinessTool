'use strict';
module.exports = (sequelize, DataTypes) => {
  const PTO_request = sequelize.define('PTO_requests', {
    employee_name: DataTypes.STRING,
    requested_dates: DataTypes.STRING,
    comment: DataTypes.STRING
  },{
    sequelize,
    modelName: 'PTO_requests'
    // options
  });
  PTO_request.associate = function(models) {
    // associations can be defined here
  };
  return PTO_request;
};
