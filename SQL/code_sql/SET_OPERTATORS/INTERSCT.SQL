--SELECT THE Similar WITH A AND B
Select * From AnnualReport (1997) AS A
INTERSECT 
Select * From AnnualReport (1995) AS B