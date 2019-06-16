'use strict';
module.exports = (sequelize, DataTypes) => {
  const payroll_employees = sequelize.define('payroll_employees', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    annual_salary: DataTypes.DECIMAL,
    monthly_salary: DataTypes.DECIMAL
  }, {});
  payroll_employees.associate = function(models) {
    // associations can be defined here
  };
  return payroll_employees;
};