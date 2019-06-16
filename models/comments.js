<<<<<<< HEAD
const orm = require('../config/orm');

const comments = {
    all: function(cb) {
        orm.all('comments', function(res) {
            cb(res);
        })
    },
    create: function(cols, vals, cb) {
        orm.create('comments', cols, vals, function(res) {
            cb(res);
        })
    },
    update: function(objColVals, condition, cb) {
        orm.update('comments', objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete('comments', condition, function(res) {
            cb(res);
        });
    }
}

module.exports = comments;
=======
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
>>>>>>> 5b771850c5dfec8778c3fe16ab9c427f5271d428
