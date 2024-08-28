--SELECT A AND EXCEPT B
Select * From AnnualReport (1997) AS A
EXCEPT 
Select * From AnnualReport (1995) AS B