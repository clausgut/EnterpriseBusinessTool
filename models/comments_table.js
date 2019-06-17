'use strict';
module.exports = (sequelize, DataTypes) => {
  const comments_table = sequelize.define('comments_table', {
    access_level: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {});
  comments_table.associate = function(models) {
    // associations can be defined here
  };
  return comments_table;
};