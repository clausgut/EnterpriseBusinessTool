// dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const models = require('./models');
// initialize the express server
const app = express();
// set the express server to use the handlebars engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
// express server arguments
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(5000, () => console.log('Listening...'));