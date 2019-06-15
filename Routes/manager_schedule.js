// Pull in required dependencies
var express = require('express');
var router = express.Router();

// Import the model (manager.js) to use its database functions.
var manager = require('../models/manager.js');

// Create the routes and associated logic
router.get('/', function(req, res)) {
    res.render('index');
}

router.get('/revenue/', function (req, res) {
    manager_revenue.selectAll(function (data) {
        var hbsObject = {
            managers: data
        };
        // console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/managers', function (req, res) {
    manager.insertOne([
        'gross_profit', 'gross_loss'
    ], [
            req.body.gross_profit, req.body.gross_loss
        ], function (data) {
            res.redirect('/');
        });
});

router.put('/managers/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;

    manager.updateOne({
        gross_profit: req.body.gross_profit,
        gross_loss: req.body.gross_loss,
        cost_of_goods_sold: req.body.cost_of_goods_sold,
        operating_expenses: req.body.operating_expenses,
        operating_income: req.body.operating_income,
        other_income: req.body.other_income,
        other_expenses: req.body.other_expenses,
        investment_income: req.body.investment_income,
        interest_expense: req.body.interest_expense,
        taxes: req.body.taxes,
        extraordinary_events_expenses: req.body.extraordinary_events_expenses,
        profit: req.body.profit,
        department_name: req.body.department_name,
        price: req.body.price,
        day_entered: req.body.day_entered,
        month_entered: req.body.month_entered,
        year_entered: req.body.year_entered,
        stock_quantity: req.body.stock_quantity,

    }, condition, function (data) {
        res.redirect('/');
    });


});

router.put('/managers/:month_entered', function (req, res) {
    var condition = 'month_entered = ' + req.params.month_entered;

    manager.updateOne({
        gross_profit: req.body.gross_profit,
        gross_loss: req.body.gross_loss,
        cost_of_goods_sold: req.body.cost_of_goods_sold,
        operating_expenses: req.body.operating_expenses,
        operating_income: req.body.operating_income,
        other_income: req.body.other_income,
        other_expenses: req.body.other_expenses,
        investment_income: req.body.investment_income,
        interest_expense: req.body.interest_expense,
        taxes: req.body.taxes,
        extraordinary_events_expenses: req.body.extraordinary_events_expenses,
        profit: req.body.profit,
        department_name: req.body.department_name,
        price: req.body.price,
        day_entered: req.body.day_entered,
        month_entered: req.body.month_entered,
        year_entered: req.body.year_entered,
        stock_quantity: req.body.stock_quantity
    }, condition, function (data) {
        res.redirect('/');

    });
});

router.delete('/managers/:year_entered', function (req, res) {
    var condition = 'year_entered = ' + req.params.year_entered;

    manager.deleteOne(req.params.year_entered, function (res) {
        res.status(404).end();
    })
})

module.exports = router;