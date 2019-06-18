// dependencies
const router = require("express").Router();
//getting the data for the currently signed in user
// const activeUser = require('activeUser');
// import the employee model

const db = require("../models");


router.get('/hr/', (req, res) => {
    db.employee.findAll({}).then(data => {
        res.json(data);
    });
});

router.get('/hr/:id', (req, res) => {
    // const employee_data = req.body;
    const employeeId = req.params.id;

    db.employee.findOne({
        where: {
            id: employeeId
        }
    }).then(data => {
        res.json(data);
    });
});

router.post('/hr/', (req, res) => {
    const employee_data = req.body;
    
    db.employee.create({  
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        address: req.body.address,
        start_date: req.body.start_date,
        annual_salary: req.body.annual_salary,
        access_level: req.body.access_level,
        role: req.body.role,
        weekly_schedule: req.body.weekly_schedule,
        scheduled_shift: req.body.scheduled_shift
      })
      .then(data => {
        res.json(data);
      });
    
});

router.put('/hr/', (req, res) => {
    const employee_data = req.body;
    const employeeId = req.body.id;
   
   db.employee.update(employee_data, {where: { id: employeeId} })
   .then(updatedData => {
         res.json(updatedData);
         console.log(updatedData);
         
    });
});

router.delete('/hr/:id', (req, res) => {
    const employeeId = req.params.id;

    db.employee.destroy({
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
