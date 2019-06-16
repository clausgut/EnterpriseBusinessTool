DROP DATABASE IF EXISTS employee_db;

USE employee_db;

CREATE TABLE inventory(
 
 item_id INTEGER NOT NULL AUTO_INCREMENT,

 serial_number DECIMAL(10,4) NOT NULL,

 name VARCHAR (150) NOT NULL,

 inventory INTEGER (10) NOT NULL,

 sales_number_item INTEGER(10) NOT NULL,

 PRIMARY KEY (item_id);

)



