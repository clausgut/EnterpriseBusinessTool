USE employee_db;

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

)

