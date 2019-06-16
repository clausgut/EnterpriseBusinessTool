// dependencies
const router = require("express").Router();
var activeUser = {};

// the login_credential model
const login_credential = require('../models/login_credential.js');

// query the datapase to get the access level of the user and render the appropriate page.
router.get('/api/login_credentials', (req, res) => {
    login_credential.findByPk({
        where: {
            username: req.body.email
        }
    }).then(() => {
        activeUser = res.body;
        if (activeUser.access_level === 1) {
            res.render('employee');
        } else if (activeUser.access_level === 2) {
            res.render('hr');
        } else if (activeUser.access_level === 3) {
            res.render('supervisor');
        }
    });
});

//exporting for the server.js file to use
module.exports = router;
module.exports = activeUser;