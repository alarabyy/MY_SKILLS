--Use Comparison
--Number
Select ProductID,ProductName,UnitPrice
From Products
Where UnitPrice>90
--Text --> Use = | !=
Select FirstName,lastName
From Employees
Where LastName='King' -- Employee With Last name is KING

Select Firstname,Lastname
From Employees
Where Lastname!='King' -- All Employees Except King

--With Dates
Select *
From Orders
Where OrderDate >'12/31/1997' --After NOTE : write Date As your Machine

Select *
From Orders
Where OrderDate >'19971231' --Use Default Date String 'YYYYMMDD'

Select *
From Orders
Where OrderDate >='19970101' AND OrderDate <='19971231'

-- Use Between --> Works With NUMBERS & Dates & Time --Can Not work With Text
Select *
From Orders
Where OrderDate Between '1/1/1997' AND '12/31/1997'

--USE OR - IN
Select *
From Orders
Where (ShipCountry='Italy'
		OR ShipCountry='Germany' 
		OR ShipCountry='France')
		AND OrderDate >'1/1/1998'


Select *
From Orders
Where ShipCountry IN('Germany','Italy','France') 
			AND OrderDate >'1/1/1998'
