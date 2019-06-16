// dependencies
const express = require('express');
const exphbs = require('express-handlebars');
<<<<<<< HEAD
const PORT = process.env.PORT || 8080;
// const models = require('./models');
=======
const sequelize = require('sequelize');
const db = require('db');
const {supervisorRouter, employeeRouter, indexRouter, hrRouter} = require('./routes');

>>>>>>> 5b771850c5dfec8778c3fe16ab9c427f5271d428
// initialize the express server
const PORT = process.env.PORT || 5000;
const app = express();
<<<<<<< HEAD
// set the express server to use the handlebars engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
// express server argumentsdev
=======

// express server arguments
>>>>>>> 5b771850c5dfec8778c3fe16ab9c427f5271d428
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
sequelize.sync();

// setting express to use created routes
app.use('/api', supervisorRouter);
app.use('/api', employeeRouter);
app.use('/api', hrRouter);
app.use('/api', indexRouter);

app.get('/', (req, res) => {
    res.render('index');
});

<<<<<<< HEAD
const routes = require("./controller/controller.js");

app.use(routes);


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  
=======
// start the server looking for requests
app.listen(PORT, () => console.log('Listening...'));
>>>>>>> 5b771850c5dfec8778c3fe16ab9c427f5271d428
