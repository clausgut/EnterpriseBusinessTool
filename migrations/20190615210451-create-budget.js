'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('budgets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      finance_cost: {
        type: Sequelize.DECIMAL
      },
      sales_marketing: {
        type: Sequelize.DECIMAL
      },
      industrial_relations: {
        type: Sequelize.DECIMAL
      },
      information_technology: {
        type: Sequelize.DECIMAL
      },
      distribution_center: {
        type: Sequelize.DECIMAL
      },
      maintenance_and_utilities: {
        type: Sequelize.DECIMAL
      },
      manufacturing_engineering: {
        type: Sequelize.DECIMAL
      },
      quality_assurance: {
        type: Sequelize.DECIMAL
      },
      packaging_dispatch: {
        type: Sequelize.DECIMAL
      },
      production_engineering: {
        type: Sequelize.DECIMAL
      },
      supply_chain_Logistics: {
        type: Sequelize.DECIMAL
      },
      design_development: {
        type: Sequelize.DECIMAL
      },
      research_development: {
        type: Sequelize.DECIMAL
      },
      testing_validation: {
        type: Sequelize.DECIMAL
      },
      production_planning: {
        type: Sequelize.DECIMAL
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
    return queryInterface.dropTable('budgets');
  }
};