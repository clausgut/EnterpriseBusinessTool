// dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 8080;
// const models = require('./models');
// initialize the express server
const app = express();
// set the express server to use the handlebars engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
// express server argumentsdev
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
});

const routes = require("./controller/controller.js");

app.use(routes);


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  