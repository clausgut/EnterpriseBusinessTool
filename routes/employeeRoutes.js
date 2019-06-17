// dependencies
const router = require("express").Router();
//getting the data for the currently signed in user
// const activeUser = require('activeUser');
// import the employee model

const db = require("../models");


router.get('/employee/:id', (req, res) => {
    const employee_data = req.body;
    const employeeId = req.params.id;

    db.employee.findOne({
        where: {
            id: employeeId
        }
    }).then(data => {
        res.json(data);
    });
});

// This is NOT a secure route.  Anyone who knows their way around an API can just query with the proper access level.
// Real authentication would solve this issue, but that's for another time
router.get('/employees', (req, res) => {
    const currentUserAccessLevel = req.query.access;
    if (currentUserAccessLevel > 1) {
        db.employee.findAll({}).then(data => {
            res.json(data);
        });
    } else {
        res.json({ status: 200, message: 'You do not have sufficient permissions to view this data' });
    }
});

//exporting for the server.js file to use
module.exports = router;
