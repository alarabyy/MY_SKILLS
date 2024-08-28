CREATE TABLE Employees (
    EmployeeID INT,
    EmployeeName VARCHAR(100),
    Salary INT
);

INSERT INTO Employees (EmployeeID, EmployeeName, Salary) VALUES (1, 'Alice', 5000);
INSERT INTO Employees (EmployeeID, EmployeeName, Salary) VALUES (2, 'Bob', 7000);
INSERT INTO Employees (EmployeeID, EmployeeName, Salary) VALUES (3, 'Charlie', 3000);




SELECT 
    EmployeeID,
    EmployeeName,
    Salary,
    IIF(Salary > 6000, 'High', 'Low') AS SalaryCategory
FROM 
    Employees;
