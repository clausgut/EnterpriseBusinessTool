const orm = require('../config/orm');

const payroll = {
    all: function(cb) {
        orm.all('payroll_employees', function(res) {
            cb(res);
        })
    },
    create: function(cols, vals, cb) {
        orm.create('payroll_employees', cols, vals, function(res) {
            cb(res);
        })
    },
    update: function(objColVals, condition, cb) {
        orm.update('payroll_employees', objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete('payroll_employees', condition, function(res) {
            cb(res);
        });
    }
}

module.exports = payroll;