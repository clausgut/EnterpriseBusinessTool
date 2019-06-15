// Pull in required dependencies
var express = require('express');
var router = express.Router();

// Import the model (manager.js) to use its database functions.
var manager = require('../models/manager.js');

// Create the routes and associated logic
router.get('/', function (req, res)) {
    res.render('index');
}

router.get('/budget/', function (req, res) {
    manager_budget.selectAll(function (data) {
        var hbsObject = {
            managers: data
        };
        // console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/managers', function (req, res) {
    manager.insertOne([

        'finance_cost',
        'sales_marketing',
        'industrial_relations',
        'information_technology',
        'distribution_center',
        'maintenance_and_utilities',
        'manufacturing_engineering',
        'quality_assurance',
        'packaging_dispatch',
        'production_engineering',
        'supply_chain_Logistics',
        'design_development',
        'research_development',
        'testing_validation',
        'production_planning',
    ], [
            req.body.gross_profit, req.body.gross_loss
        ], function (data) {
            res.redirect('/');
        });
});

router.put('/managers/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;

    manager.updateOne({
        finance_cost: req.res.finance_cost,
        sales_marketing: req.res.sales_marketing,
        industrial_relations: req.res.industrial_relations,
        information_technology: req.res.information_technology,
        distribution_center: req.res.distribution_center,
        maintenance_and_utilities: req.res.maintenance_and_utilities,
        manufacturing_engineering: req.res.manufacturing_engineering,
        quality_assurance: req.res.quality_assurance,
        packaging_dispatch: req.res.packaging_dispatch,
        production_engineering: req.res.production_engineering,
        supply_chain_Logistics: req.res.supply_chain_Logistics,
        design_development: req.res.design_development,
        research_development: req.res.research_development,
        testing_validation: req.res.testing_validation,
        production_planning: req.res.production_planning,

    }, condition, function (data) {
        res.redirect('/');
    });


});

router.put('/managers/:month_entered', function (req, res) {
    var condition = 'month_entered = ' + req.params.month_entered;

    manager.updateOne({
        finance_cost: req.res.finance_cost,
        sales_marketing: req.res.sales_marketing,
        industrial_relations: req.res.industrial_relations,
        information_technology: req.res.information_technology,
        distribution_center: req.res.distribution_center,
        maintenance_and_utilities: req.res.maintenance_and_utilities,
        manufacturing_engineering: req.res.manufacturing_engineering,
        quality_assurance: req.res.quality_assurance,
        packaging_dispatch: req.res.packaging_dispatch,
        production_engineering: req.res.production_engineering,
        supply_chain_Logistics: req.res.supply_chain_Logistics,
        design_development: req.res.design_development,
        research_development: req.res.research_development,
        testing_validation: req.res.testing_validation,
        production_planning: req.res.production_planning,
        
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