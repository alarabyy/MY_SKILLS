CREATE DATABASE [TEST]

USE TEST;
CREATE TABLE EMP1(
ID INT PRIMARY KEY,
SALARY INT,
PHONE INT,
FNAME VARCHAR(250)
)
INSERT INTO EMP1 (ID, FNAME, SALARY) VALUES
(1, 'John Doe', 60000),
(2, 'Jane Smith', 45000),
(3, 'Emily Jones', 75000),
(4, 'Michael Brown', 50000),
(5, 'Sarah Davis', 80000);

CREATE VIEW  IF NOT EXISTS  high_salary_employees AS 
SELECT SALARY,PHONE ,FNAME,ID
FROM  EMP1
WHERE SALARY > 60000

SELECT * FROM  high_salary_employees