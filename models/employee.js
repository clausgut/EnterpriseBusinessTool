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