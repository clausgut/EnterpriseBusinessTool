var express = require("express");

var app =express();

var PORT = process.env.PORT || 8080;

app.use(urlencoded({ extended: true}));
app.use(express.json());

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password:"",
    database: "wishes_db"
});

connection.connect(function(err){
    if (err){
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

app.get("/", function(req, res){
    connection.query("SELECT * FROM wishes;", function(err, data){
        if (err){
            throw err;
        }


        res.render("index", {wishes: data});
    });
});

