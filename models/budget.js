'use strict';
module.exports = (sequelize, DataTypes) => {
  const budget = sequelize.define('budget', {
    finance_cost: DataTypes.DECIMAL,
    sales_marketing: DataTypes.DECIMAL,
    industrial_relations: DataTypes.DECIMAL,
    information_technology: DataTypes.DECIMAL,
    distribution_center: DataTypes.DECIMAL,
    maintenance_and_utilities: DataTypes.DECIMAL,
    manufacturing_engineering: DataTypes.DECIMAL,
    quality_assurance: DataTypes.DECIMAL,
    packaging_dispatch: DataTypes.DECIMAL,
    production_engineering: DataTypes.DECIMAL,
    supply_chain_Logistics: DataTypes.DECIMAL,
    design_development: DataTypes.DECIMAL,
    research_development: DataTypes.DECIMAL,
    testing_validation: DataTypes.DECIMAL,
    production_planning: DataTypes.DECIMAL
  }, {});
  budget.associate = function(models) {
    // associations can be defined here
  };
  return budget;
};