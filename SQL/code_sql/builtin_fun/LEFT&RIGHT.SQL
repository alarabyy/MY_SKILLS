SELECT 
    Title,
    RIGHT(Title, LEN(Title) - CHARINDEX(' ', Title)) AS SecondPart,
    LEFT(Title, CHARINDEX(' ', Title) - 1) AS FirstPart
FROM Employees;