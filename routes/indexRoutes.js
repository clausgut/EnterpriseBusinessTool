// dependencies
const router = require("express").Router();
var activeUser = {};

// the login_credential model
const db = require('../models');

// query the datapase to get the access level of the user and render the appropriate page.
router.get('/dashboard', (req, res) => {
    console.log(req.query);
    db.login_credentials.findOne({
        where: {
            username: req.query.uname
        }
    }).then(data => {
        activeUser = data;
        if (activeUser.access_level === 1) {
          res.render('employee', {
            username: activeUser.username,
            access: activeUser.access_level
          });
        } else if (activeUser.access_level === 2) {
            res.render('hr', {
              username: activeUser.username,
              access: activeUser.access_level
            });
        } else if (activeUser.access_level === 3) {
            res.render('supervisor', {
              username: activeUser.username,
              access: activeUser.access_level
            });
        }
    });
});

//exporting for the server.js file to use
module.exports = router;
// module.exports = activeUser;
