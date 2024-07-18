SELECT 
    Title,
    SUBSTRING(Title, 1, CHARINDEX(' ', Title) ) AS FirstName
FROM 
    Employees;