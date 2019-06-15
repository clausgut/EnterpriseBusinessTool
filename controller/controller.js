var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var payroll = require("../models/payroll");

// Create all our routes and set up logic within those routes where required.
router.get("/payroll", function(req, res) {
  payroll.all(function(data) {
    var payrollHrEmployees = {
      payroll_employees: data
    };
    console.log(payrollHrEmployees);
    res.json(payrollHrEmployees);
    res.render(payrollHrEmployees);
  });
});


var employeeInformation = require("../models/employee");

router.get("/employeeinformation", function(req, res) {
    employeeInformation.all(function(data) {
      var employeeInfo = {
        employees: data
      };
      console.log(employeeInfo);
      res.json(employeeInfo);
      res.render(employeeInfo);
    });
  });



  var comments = require("../models/comments");

  router.get("/comments", function(req, res) {
      comments.all(function(data) {
        var comment = {
          comments: data
        };
        console.log(comment);
        res.json(comment);
        res.render(comment);
      });
    });

// router.post("/hr/payroll/create", function(req, res) {
//   employees.create([
//     "employee_id", "first_name", "last_name", "annual_salary", "monthly_salary"
//   ], [
//     req.body.employee_id, req.body.first_name, req.body.last_name, req.body.annual_salary, req.body.monthly_salary
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/hr/api/payroll_employees/:first_name", function(req, res) {
//   var condition = "first_name = " + req.params.first_name;

//   console.log("condition", condition);

//   employees.update({
//     employee_id: req.body.employee_id
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/api/employee_id/employee/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   cat.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;


// POST method route
// app.post('/', function (req, res) {
//     res.send('POST request to the homepage')
//   })