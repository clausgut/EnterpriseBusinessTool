// dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const Sequelize = require('sequelize');
const models = require('./models');
// initialize the express server
const app = express();

// set the express server to use the handlebars engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// express server arguments
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// //syncing models from db
// models.sequelize.sync({force: false})
// .then(() => {

// });

app.get('/', (req, res) => {
    res.render('index');
});

// start the server looking for requests
app.listen(5000, () => console.log('Listening...'));


// // initiallize the sequalize connection
// const db = new Sequelize(
//     'employee_db',
//     'root',
//     '', {
//     // host: 'localhost',
//     dialect: 'mysql'
//   });
// app.get('/', (req, res) => {
//     res.render('index');
// });

// db
// .authenticate()
// .then(() => {
//   console.log('Connection has been established successfully.');
// })
// .catch(err => {
//   console.error('Unable to connect to the database:', err);
// });
// Employee.sync({force: false});

// // modeling the Login_Credential table in sequalize.
// const Login_Credential = Sequelize.define('login_credentials',
// {  // attributes
//   username: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   password: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   access_level: {
//     type: Sequelize.INTEGER,
//     allowNull: false
//   },
//   employee_id: {
//     type: Sequelize.INTEGER,
//     allowNull: false
//   }
// }, {
//   sequelize,
//   modelName: 'login_credentials'
//   // options
// });
