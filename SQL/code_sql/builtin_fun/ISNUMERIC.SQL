SELECT 
    TitlE ,EmployeeID,
     ISNUMERIC(Title) AS ISNUMERIC1,
     ISNUMERIC(EmployeeID) AS ISNUMERIC2
FROM 
    Employees;