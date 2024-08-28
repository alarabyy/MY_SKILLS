-- Query the list of CITY names from 
-- STATION that either do not start with
--  vowels or do not end with vowels.
--   Your result cannot contain duplicates.


-------------------------------------------------------------



SELECT DISTINCT CITY
FROM STATION
WHERE 
    RIGHT(CITY, 1) NOT IN ('A', 'E', 'I', 'O', 'U')
    OR
    LEFT(CITY, 1) NOT IN ('A', 'E', 'I', 'O', 'U')
ORDER BY CITY;








