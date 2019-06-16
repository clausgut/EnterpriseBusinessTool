DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE budget(

finance_cost DECIMAL(10,4) NOT NULL,
sales_marketing DECIMAL(10,4) NOT NULL,
industrial_relations DECIMAL(10,4) NOT NULL,
information_technology DECIMAL(10,4) NOT NULL,
distribution_center DECIMAL(10,4) NOT NULL,
maintenance_and_utilities DECIMAL(10,4) NOT NULL,
manufacturing_engineering DECIMAL(10,4) NOT NULL,
quality_assurance  DECIMAL(10,4) NOT NULL,
packaging_dispatch DECIMAL(10,4) NOT NULL,
production_engineering DECIMAL(10,4) NOT NULL,
supply_chain_Logistics DECIMAL(10,4) NOT NULL,
design_development DECIMAL(10,4) NOT NULL,
research_development DECIMAL(10,4) NOT NULL,
testing_validation DECIMAL(10,4) NOT NULL,
production_planning DECIMAL(10,4) NOT NULL
);

INSERT INTO budget
VALUES(10.2,15.12,22.22,34.1,15.5,33.33,123.1,345.44,456.12,190.12,142.15,1234.15,123.45,90.15, 1234.1);