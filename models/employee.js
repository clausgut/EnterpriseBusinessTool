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
            modelName: 'employees',
          // options
            timestamps: false
        });
    // associations here
    // Employee.associate = function (models) {
        // this.belongsTo(models.group, { foreignKey: 'teamSpecifier' });
    // };
    return Employee;
};
