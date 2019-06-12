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

INSERT INTO employees(first_name, last_name, address, start_date, annual_salary, access_level, role, weekly_schedule, scheduled_shift)
VALUES
('John', 'Davis', '123 Example Ave. Atlanta, GA 30309', '12/12/2012', 80000, 2, 'HR Director', 'MTWTF', '8AM to 5PM'),
('Pablo', 'Francisco', '345 Sample St. Atlanta, GA 30305', '10/08/2014', 78000, 1, 'Advertising Lead', 'MTWTF', '9AM to 6PM'),
('Aneesh', 'Patel', '567 Fake Address Rd. Nowhere, GA 30307', '12/12/2012', 90000, 3, 'Chief Financial Officer', 'MTWTF', '8AM to 5PM'),
('Jose', 'Mendez', '987 Mock Data Ln. Ashburn, VA 90215', '08/10/2013', 75000, 1, 'Accounting Associate', 'MTWTF', '8AM to 5PM'),
('Erica', 'Richardson', '875 Silly Street Name Ct. Leesburg, FL 34476', '05/15/2015', 85000, 1, 'Lead Marketing Researcher', 'MTWTF', '8AM to 5PM'),
('Tyrone', 'Jefferson', '345 Rocky Creek Dr. Reno, NV 37645', '12/12/2012', 80000, 1, 'Warehouse Manager', 'MTWTF', '7AM to 4PM'),
('Martha', 'Stewartsen', '27 Market St. San Francisco, CA 94456', '11/11/2016', 84000, 1, 'Sales Team Lead', 'MTWTF', '8AM to 5PM'),
('Jessica', 'Smith', '6 Park Pl. Atlanta, GA 30307', '02/20/2014', 75000, 1, 'Junior Advertising Associate', 'MTWTF', '8AM to 5PM'),
('Olivia', 'Paradis', '594 Placeholder Rd. Vacaville, CA 98865', '07/17/2016', 82500, 1, 'Accounting Team Lead', 'MTWTF', '8AM to 5PM'),
('Serena', 'Gomez', '12 Not A Real Address Pl. Duluth, GA 30345', '03/13/2015', 78000, 2, 'Recruiter', 'MTWTF', '8AM to 5PM');

CREATE TABLE auth_credentials(
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    access_level INT(5) NOT NULL,
    employee_id INT(5) NOT NULL
);

INSERT INTO auth_credentials(username, password, access_level, employee_id)
VALUES
('jdavis', 'testPass', 2, 1),
('pfrancisco', 'testPass1', 1, 2),
('apatel', 'testPass2', 3, 3),
('jmendez', 'testPass3', 1, 4),
('erichardson', 'testPass4', 1, 5),
('tjefferson', 'testPass5', 1, 6),
('mstewartsen', 'testPass6', 1, 7),
('jsmith', 'testPass7', 1, 8),
('oparadis', 'testPass8', 1, 9),
('sgomez', 'testPass9', 2, 10);


CREATE TABLE PTO_requests(
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    employee_name VARCHAR(30) NOT NULL,
    requested_dates VARCHAR(30) NOT NULL,
    comment VARCHAR(50)
);