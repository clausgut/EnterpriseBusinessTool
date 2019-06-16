// dependencies
const router = require("express").Router();
//getting the data for the currently signed in user
const activeUser = require('activeUser');
// import the employee model
const models = require("../models/employee.js");


router.get('/api/employee/:id', (req, res) => {
    const employee_data = req.body;
    const employeeId = req.params.id;
    
});

//exporting for the server.js file to use
module.exports = router;