var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Set Handlebars as the view engine
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


var routes = require('./Routes/manager_revenue');

app.use(routes);

app.listen(PORT, function() {
    console.log("App now listening at localhost: " + PORT);
});