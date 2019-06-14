USE employee_db; 

CREATE TABLE payroll_employees(
    employee_id INT PRIMARY KEY NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    annual_salary INT(10) NOT NULL,
    monthly_salary INT(10) NOT NULL
);

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