USE employee_db;

CREATE TABLE schedule(
    item_id INTEGER NOT NULL AUTO_INCREMENT,

    hours INTEGER NOT NULL,
    
    monday  VARCHAR 
    
    tuesday VARCHAR

    wednesday VARCHAR

    thursday VARCHAR

    friday VARCHAR

    saturday VARCHAR

    sunday VARCHAR

    PRIMARY KEY(item_id)

)

INSERT INTO schedule
    VALUES(36000,3459.8, 345.7, 300, 456, 475758, 57586, "Automotive", );
INSERT INTO schedule
    VALUES('Dog Ice cream - strawberry','Pets', 8.99, 150);