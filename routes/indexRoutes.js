// dependencies
const router = require("express").Router();
var activeUser = {};

// the login_credential model
const db = require('../models');

// query the datapase to get the access level of the user and render the appropriate page.
router.get('/dashboard', (req, res) => {
    db.login_credentials.findOne({
        where: {
            username: req.params.email
        }
    }).then(data => {
         activeUser.access_level = data.access_level;
        if (activeUser.access_level === 1) {
          return res.render('employee', {
            username: activeUser.username,
            access: activeUser.access_level
          });
        } else if (activeUser.access_level === 2) {
            return res.render('hr', {
              username: activeUser.username,
              access: activeUser.access_level
            });
        } else if (activeUser.access_level === 3) {
            return res.render('supervisor', {
              username: activeUser.username,
              access: activeUser.access_level
            });
        }
    });
});

//exporting for the server.js file to use
module.exports = router;
// module.exports = activeUser;
