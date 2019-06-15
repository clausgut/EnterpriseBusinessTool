DROP DATABASE IF EXISTS employee_db;

USE employee_db;

CREATE TABLE budget(

finance_cost INTEGER(10,4) NOT NULL,
sales_marketing INTEGER(10,4) NOT NULL,
industrial_relations INTEGER(10,4) NOT NULL,
information_technology INTEGER(10,4) NOT NULL,
distribution_center INTEGER(10,4) NOT NULL,
maintenance_and_utilities INTEGER(10,4) NOT NULL,
manufacturing_engineering INTEGER(10,4) NOT NULL,
quality_assurance  INTEGER(10,4) NOT NULL,
packaging_dispatch INTEGER(10,4) NOT NULL,
production_engineering INTEGER(10,4) NOT NULL,
supply_chain_Logistics INTEGER(10,4) NOT NULL,
design_development INTEGER(10,4) NOT NULL,
research_development INTEGER(10,4) NOT NULL,
testing_validation INTEGER(10,4) NOT NULL,
production_planning INTEGER(10,4) NOT NULL,
)

INSERT INTO budget
VALUES(586888869,2222222,22.22,33345,33334,33333,3333,3333,33333,333333,333333,333333,3333, 477586, 458496849);