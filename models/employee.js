<<<<<<< HEAD
const orm = require('../config/orm');

const employeeInformation = {
    all: function(cb) {
        orm.all('employees', function(res) {
            cb(res);
        })
    },
    create: function(cols, vals, cb) {
        orm.create('employees', cols, vals, function(res) {
            cb(res);
        })
    },
    update: function(objColVals, condition, cb) {
        orm.update('employees', objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete('employees', condition, function(res) {
            cb(res);
        });
    }
}

module.exports = employeeInformation;
=======
'use strict';
module.exports = (sequelize, DataTypes) => {
    // modeling the employee table in sequalize.
    const Employee = sequelize.define('employee',
        {   // attributes
            first_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            last_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            address: {
                type: DataTypes.STRING
            },
            start_date: {
                type: DataTypes.STRING,
                allowNull: false
            },
            annual_salary: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            access_level: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            role: {
                type: DataTypes.STRING,
                allowNull: false
            },
            weekly_schedule: {
                type: DataTypes.STRING,
                allowNull: false
            },
            scheduled_shift: {
                type: DataTypes.STRING,
                allowNull: false
            },
        }, {
            sequelize,
            modelName: 'employees'
            // options
        });
    // associations here
    Employee.associate = function (models) {
        // this.belongsTo(models.group, { foreignKey: 'teamSpecifier' });
    };
    return Employee;
};
>>>>>>> 5b771850c5dfec8778c3fe16ab9c427f5271d428
