INSERT INTO comments(comment, access)
VALUES
("Hi Everyone - The office will be closed on July 5th. We hope everyone is able to have a great 4th of July holiday weekend!", 1),
("Don't forget the leadership retreat is on July 15th. If you are unable to attend, place a notice by July 10", 2),
("TEST MESSAGE FOR EVERYONE", 1),
("TEST MESSAGE FOR SUPERVISORS", 2);

INSERT INTO login_credentials(username, password, access_level, employee_id)
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

INSERT INTO payroll_employees(employee_id, first_name, last_name, annual_salary, monthly_salary)
VALUES
('1', 'John', 'Davis', 80000, 4823),
('2', 'Pablo', 'Francisco', 78000, 4715),
('3', 'Aneesh', 'Patel', 90000, 5359),
('4', 'Jose', 'Mendez', 75000, 4554),
('5', 'Erica', 'Richardson', 85000, 5091),
('6', 'Tyrone', 'Jefferson', 80000, 4823),
('7', 'Martha', 'Stewartsen', 84000, 5037),
('8', 'Jessica', 'Smith', 75000, 4554),
('9', 'Olivia', 'Paradis', 82500, 4957),
('10', 'Serena', 'Gomez', 78000, 4715);

INSERT INTO budget
VALUES(10.2,15.12,22.22,34.1,15.5,33.33,123.1,345.44,456.12,190.12,142.15,1234.15,123.45,90.15, 1234.1);

INSERT INTO revenue
VALUES
(36000,3459.8, 345.7, 300, 456, 475758, 57586, 464747, 57686, 475885, 47586, 366747,"IT",5857,5757,5858,4657,57),
(36000,3459.8, 345.7, 300, 456, 475758, 57586, 464747, 57686, 475885, 47586, 366747,"Finance & Cost",5857,5757,5858,4657,57),
(36000,3459.8, 345.7, 300, 456, 475758, 57586, 464747, 57686, 475885, 47586, 366747,"Sales & Marketing",5857,5757,5858,4657,57),
(36000,3459.8, 345.7, 300, 456, 475758, 57586, 464747, 57686, 475885, 47586, 366747,"Industrial Relations",5857,5757,5858,4657,57),
(36000,3459.8, 345.7, 300, 456, 475758, 57586, 464747, 57686, 475885, 47586, 366747,"Distribution Center",5857,5757,5858,4657,5),
(36000,3459.8, 345.7, 300, 456, 475758, 57586, 464747, 57686, 475885, 47586, 366747,"Maintenance & utilities",5857,5757,5858,4657,57),
(36000,3459.8, 345.7, 300, 456, 475758, 57586, 464747, 57686, 475885, 47586, 366747,"Manufacturing & Engineering",5857,5757,5858,4657,57),
(36000,3459.8, 345.7, 300, 456, 475758, 57586, 464747, 57686, 475885, 47586, 366747,"IT",5857,5757,5858,4657,57),
(36000,3459.8, 345.7, 300, 456, 475758, 57586, 464747, 57686, 475885, 47586, 366747,"IT",5857,5757,5858,4657,57),
(36000,3459.8, 345.7, 300, 456, 475758, 57586, 464747, 57686, 475885, 47586, 366747,"IT",5857,5757,5858,4657,57);


