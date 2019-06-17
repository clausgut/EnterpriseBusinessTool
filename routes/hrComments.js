// dependencies
const router = require("express").Router();

const comments = require('../models/comments.js');

// query the datapase to get the access level of the user and render the appropriate page.
router.post('api/comments', (req, res) => {
    comments.create(req.body, access).then(() => {
        if (access === 3) {
            res.render('employee');
            res.json(comments)
        } else if (access === 2) {
            res.render('hr');
            res.json(comments)
        } else if (access === 1) {
            res.render('supervisor');
            res.json(comments)
        }
    });
});

//exporting for the server.js file to use
module.exports = router;
module.exports = activeUser;