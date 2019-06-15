USE employee_db;

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

   taxes INTEGER(10,4) NOT NULL

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

    INSERT INTO revenue
    VALUES(36000,3459.8, 345.7, 300, 456, 475758, 57586, "Automotive", );
    INSERT INTO
    VALUES('Dog Ice cream - strawberry','Pets', 8.99, 150);
    INSERT INTO revenue
    VALUES('Bouncy Paper Towel','Paper goods', 3.99, 700);
    INSERT INTO revenue
    VALUES('Dove Body Lotion','Personal Care', 5.99, 450);
    INSERT INTO revenue
    VALUES('Shortbread Cookies','Snacks', 2.99, 600);
    INSERT INTO revenue
    VALUES('Graham Crackers','Snacks', 1.99, 1000);
    INSERT INTO revenue
    VALUES('Salmon fish','Seafood', 15.99, 400);
    INSERT INTO revenue
    VALUES('Kettle cooked chips','Snacks', 4.99, 300);
    INSERT INTO revenue
    VALUES('Celery','Vegetables', 0.99, 1000);
    INSERT INTO revenue
    VALUES('Broccoli','Vegetables', 0.89, 1000);
