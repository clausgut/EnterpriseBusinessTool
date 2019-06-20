// dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('sequelize');
const bodyParser = require('body-parser')
const employeeRouter = require('./routes/employeeRoutes');
const hrRouter = require('./routes/hrRoutes');
const supervisorRouter = require('./routes/supervisorRoutes');
const db = require('./models');

// obj holds the access level of current user
var activeUser = {
    access_level: null
};

// initialize the express server
const PORT = process.env.PORT || 5000;
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// express server arguments
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// set the express server to use the handlebars engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

app.use('/api', supervisorRouter);
app.use('/api', employeeRouter);
app.use('/api', hrRouter);

app.get('/', (req, res) => {
    res.render('index');
});

// query the datapase to get the access level of the user and render the appropriate page.
app.get('/dashboard/:username', (req, res) => {
    db.login_credentials.findOne({
        where: {
            username: req.params.username
        }
    }).then(data => {
        var user = data.dataValues;
        console.log(user);
        console.log('Server: Login query completed!');
        activeUser.access_level = user.access_level;
        console.log(activeUser);
    }).then(() => {
            if (activeUser.access_level === 1) {
                res.render('employee');
            } else if (activeUser.access_level === 2) {
                res.render('hr');
            } else if (activeUser.access_level === 3) {
                res.render('supervisor');
            }
    });
});

// start the server looking for requests
app.listen(PORT, () => console.log('Listening...'));
