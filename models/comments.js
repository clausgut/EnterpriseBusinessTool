'use strict';
module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define('comments', {
    comment: DataTypes.STRING,
    access: DataTypes.INTEGER
  }, {});
  comments.associate = function(models) {
    // associations can be defined here
  };
  return comments;
};