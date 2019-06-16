'use strict';
module.exports = (sequelize, DataTypes) => {
  const revenue = sequelize.define('revenue', {
    cost_of_goods_sold: DataTypes.DECIMAL,
    gross_profit: DataTypes.DECIMAL,
    gross_loss: DataTypes.DECIMAL,
    operating_expenses: DataTypes.DECIMAL,
    operating_income: DataTypes.DECIMAL,
    other_income: DataTypes.DECIMAL,
    other_expenses: DataTypes.DECIMAL,
    investment_income: DataTypes.DECIMAL,
    interest_expense: DataTypes.DECIMAL,
    taxes: DataTypes.DECIMAL,
    extraordinary_events_expenses: DataTypes.DECIMAL,
    profit: DataTypes.DECIMAL,
    department_name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    day_entered: DataTypes.INTEGER,
    month_entered: DataTypes.INTEGER,
    year_entered: DataTypes.INTEGER,
    stock_quantity: DataTypes.INTEGER
  }, {});
  revenue.associate = function(models) {
    // associations can be defined here
  };
  return revenue;
};