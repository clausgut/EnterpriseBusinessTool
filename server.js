// dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('sequelize');
const {employeeRouter, indexRouter} = require('./routes');

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

// app.use(express.static("views"));

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

// sync models in the database
// sequelize.sync();

// setting express to use created routes
// app.use('/api', supervisorRouter);
app.use('/api', employeeRouter);
// app.use('/api', hrRouter);
app.use('/', indexRouter);

app.get('/', (req, res) => {
    res.render('index');
});

// start the server looking for requests
app.listen(PORT, () => console.log('Listening...'));
