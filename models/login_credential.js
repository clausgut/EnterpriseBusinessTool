'use strict';
module.exports = (sequelize, DataTypes) => {
const Login_Credential = sequelize.define('login_credentials',
{  // attributes
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  access_level: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  employee_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'login_credentials'
  // options
});
Login_Credential.associate = function(models) {
    // associations can be defined here
  };
  return Login_Credential;
};
