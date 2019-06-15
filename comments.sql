USE employee_db; 

DROP TABLE IF EXISTS comments;

CREATE TABLE comments(
    comment_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    comment VARCHAR (200) NOT NULL,
    access INT (10) NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO comments(comment, access)
VALUES
("Hi Everyone - The office will be closed on July 5th. We hope everyone is able to have a great 4th of July holiday weekend!", 1),
("Don't forget the leadership retreat is on July 15th. If you are unable to attend, place a notice by July 10", 2),
("TEST MESSAGE FOR EVERYONE", 1),
("TEST MESSAGE FOR SUPERVISORS", 2);

SELECT * FROM comments;