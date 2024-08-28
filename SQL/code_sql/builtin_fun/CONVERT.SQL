CREATE TABLE Employees (
    EmployeeID INT,
    EmployeeSalary INT
);

INSERT INTO Employees (EmployeeID, EmployeeSalary) VALUES (1, 50000);
INSERT INTO Employees (EmployeeID, EmployeeSalary) VALUES (2, 60000);
INSERT INTO Employees (EmployeeID, EmployeeSalary) VALUES (3, 70000);




SELECT 
    EmployeeID,
    CONVERT(VARCHAR(10), EmployeeSalary) AS SalaryAsText
FROM 
    Employees;
