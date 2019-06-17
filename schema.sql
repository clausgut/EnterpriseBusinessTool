DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE employees(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    address VARCHAR(50) NOT NULL,
    start_date VARCHAR(30) NOT NULL,
    annual_salary INT(10) NOT NULL,
	access_level INT(5) NOT NULL,
	role VARCHAR(30) NOT NULL,
	weekly_schedule VARCHAR(30),
	scheduled_shift VARCHAR(30)
);

CREATE TABLE login_credentials(
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    access_level INT(5) NOT NULL,
    employee_id INT(5) NOT NULL
);

CREATE TABLE PTO_requests(
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    employee_name VARCHAR(30) NOT NULL,
    requested_dates VARCHAR(30) NOT NULL,
    comment VARCHAR(50) NOT NULL
);
CREATE TABLE payroll_employees(
    employee_id INT PRIMARY KEY NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    annual_salary INT(10) NOT NULL,
    monthly_salary INT(10) NOT NULL
);

CREATE TABLE comments(
    comment_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    comment VARCHAR (200) NOT NULL,
    access INT (10) NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP
);

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

CREATE TABLE inventory(
 
 item_id INTEGER NOT NULL AUTO_INCREMENT,
 serial_number DECIMAL(10,4) NOT NULL,
 name VARCHAR (150) NOT NULL,
 inventory INTEGER (10) NOT NULL,
 sales_number_item INTEGER(10) NOT NULL,
 PRIMARY KEY (item_id);
);

CREATE TABLE revenue(
   item_id INTEGER NOT NULL AUTO_INCREMENT,
   cost_of_goods_sold INTEGER(10,4) NOT NULL,
   gross_profit INTEGER(10,4) NOT NULL,
   gross_loss INTEGER(10,4) NOT NULL,
   operating_expenses INTEGER(10,4) NOT NULL,
   operating_income INTEGER(10,4) NOT NULL,
   other_income INTEGER(10,4) NOT NULL,
   other_expenses INTEGER(10,4) NOT NULL,
   investment_income INTEGER(10,4) NOT NULL,
   interest_expense INTEGER(10,4) NOT NULL,
   taxes INTEGER(10,4) NOT NULL,
   extraordinary_events_expenses INTEGER(10,4) NOT NULL,
   profit INTEGER(10,4) NOT NULL,
   department_name VARCHAR(50) NOT NULL,
   price DECIMAL(10,4) NOT NULL,
   day_entered INTEGER(10) NOT NULL,
   month_entered INTEGER(10) NOT NULL,
   year_entered INTEGER(10) NOT NULL,
   stock_quantity INTEGER(10) NOT NULL,
   PRIMARY KEY (item_id)
);

CREATE TABLE schedule(
    item_id INTEGER NOT NULL AUTO_INCREMENT,
    hours INTEGER NOT NULL,
    monday  VARCHAR (150) NOT NULL,
    tuesday VARCHAR (150) NOT NULL,
    wednesday VARCHAR (150) NOT NULL,
    thursday VARCHAR (150) NOT NULL,
    friday VARCHAR (150) NOT NULL,
    saturday VARCHAR (150) NOT NULL,
    sunday VARCHAR (150) NOT NULL,
    PRIMARY KEY(item_id)
);
