'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hours: {
        type: Sequelize.INTEGER
      },
      monday: {
        type: Sequelize.STRING
      },
      tuesday: {
        type: Sequelize.STRING
      },
      wednesday: {
        type: Sequelize.STRING
      },
      thursday: {
        type: Sequelize.STRING
      },
      friday: {
        type: Sequelize.STRING
      },
      saturday: {
        type: Sequelize.STRING
      },
      sunday: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('schedules');
  }
};