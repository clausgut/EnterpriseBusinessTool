'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('revenues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cost_of_goods_sold: {
        type: Sequelize.DECIMAL
      },
      gross_profit: {
        type: Sequelize.DECIMAL
      },
      gross_loss: {
        type: Sequelize.DECIMAL
      },
      operating_expenses: {
        type: Sequelize.DECIMAL
      },
      operating_income: {
        type: Sequelize.DECIMAL
      },
      other_income: {
        type: Sequelize.DECIMAL
      },
      other_expenses: {
        type: Sequelize.DECIMAL
      },
      investment_income: {
        type: Sequelize.DECIMAL
      },
      interest_expense: {
        type: Sequelize.DECIMAL
      },
      taxes: {
        type: Sequelize.DECIMAL
      },
      extraordinary_events_expenses: {
        type: Sequelize.DECIMAL
      },
      profit: {
        type: Sequelize.DECIMAL
      },
      department_name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      day_entered: {
        type: Sequelize.INTEGER
      },
      month_entered: {
        type: Sequelize.INTEGER
      },
      year_entered: {
        type: Sequelize.INTEGER
      },
      stock_quantity: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('revenues');
  }
};