// Import the ORM to implement functions that will interact with the database
var orm = require('../config/orm.js');

// Create the burger object
var manager_revenue = {
  // Select all burger table entries
  selectAll: function(cb) {
    orm.selectAll('revenue', function(response) {
      cb(response);
    });
  },

  // The variables cols and vals are arrays
  insertOne: function(cols, vals, cb) {
    orm.insertOne('revenue', cols, vals, function(res) {
      cb(response);
    });
  },

  // The objColVals is an object specifying columns as object keys with associated values
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('revenue', objColVals, condition, function(res) {
      cb(res);
    });
  }
};

var manager_budget = {
  selectAll: function(cb) {
    orm.selectAll('budget', function(response) {
      cb(response);
    });
  },

  // The variables cols and vals are arrays
  insertOne: function(cols, vals, cb) {
    orm.insertOne('budget', cols, vals, function(res) {
      cb(response);
    });
  },

  // The objColVals is an object specifying columns as object keys with associated values
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('budget', objColVals, condition, function(res) {
      cb(res);
    });
  }
}

var manager_inventory = {
  selectAll: function(cb) {
    orm.selectAll('inventory', function(response) {
      cb(response);
    });
  },

  // The variables cols and vals are arrays
  insertOne: function(cols, vals, cb) {
    orm.insertOne('inventory', cols, vals, function(res) {
      cb(response);
    });
  },

  // The objColVals is an object specifying columns as object keys with associated values
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('inventory', objColVals, condition, function(res) {
      cb(res);
    });
  }
}

var manager_goals = {
  selectAll: function(cb) {
    orm.selectAll('goals', function(response) {
      cb(response);
    });
  },

  // The variables cols and vals are arrays
  insertOne: function(cols, vals, cb) {
    orm.insertOne('goals', cols, vals, function(res) {
      cb(response);
    });
  },

  // The objColVals is an object specifying columns as object keys with associated values
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('goals', objColVals, condition, function(res) {
      cb(res);
    });
  }
}
// Export the database functions for the controller(manager_controller.js)
module.exports = manager_revenue, manager_budget, manager_inventory, manager_goals;