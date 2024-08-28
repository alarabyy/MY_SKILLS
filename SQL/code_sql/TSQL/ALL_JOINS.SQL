Use Northwind
Go
Select * from [Order Details]
Select * From Products

SELECT ProductName,QuantityPerUnit,UnitsInStock,OrderID
FROM Products AS P JOIN [Order Details] AS OD ON P.ProductID =OD.ProductID
WHERE  OrderID > 11050


--------------------------------------------------------------------------------------


Select OrderID,ProductName,Od.UnitPrice,Quantity
FROM [Order Details] As OD 
	INNER JOIN PRODUCTS AS P ON p.ProductID=OD.ProductID
Where OD.UnitPrice>100

Select * From Orders
Select * from Employees

--------------------------------------------------------------------------------------

Select OD.OrderID As InvoiceNo,CompanyName As Client,
	FirstName +' '+Lastname As [Sales Person],
	ShipCountry,
	UnitPrice*Quantity As Total
FROM Orders AS O 
	JOIN Customers AS C ON O.CustomerID=C.CustomerID
	JOIN  Employees AS E ON O.EmployeeID=E.EmployeeID
	JOIN [Order Details] AS OD ON OD.OrderID=O.OrderID



--------------------------------------------------------------------------------------
--USE Inner JOIN
Select OrderID,FirstName+' '+Lastname As [Sales Person],Orderdate,ShipCountry
From Orders As O JOIN Employees AS E ON E.EmployeeID=O.EmployeeID

--Chain Of INNER JOIN
/*
EMployees
Cutomers
Orders
Order Details --> UnitPrice - Quntity
*/
Select OD.OrderID As InvoiceNo,CompanyName As Client,
	FirstName +' '+Lastname As [Sales Person],
	ShipCountry,
	UnitPrice*Quantity As Total
FROM Orders AS O 
	JOIN Customers AS C ON O.CustomerID=C.CustomerID
	JOIN  Employees AS E ON O.EmployeeID=E.EmployeeID
	JOIN [Order Details] AS OD ON OD.OrderID=O.OrderID
-----------USE GROUP BY & Aggrigate Function
Select OD.OrderID As InvoiceNo,CompanyName As Client,
	FirstName +' '+Lastname As [Sales Person],
	ShipCountry,
	SUM(UnitPrice*Quantity) As Total
FROM Orders AS O 
	JOIN Customers AS C ON O.CustomerID=C.CustomerID
	JOIN  Employees AS E ON O.EmployeeID=E.EmployeeID
	JOIN [Order Details] AS OD ON OD.OrderID=O.OrderID
GROUP BY OD.OrderID,CompanyName,FirstName +' '+Lastname,ShipCountry
---JOIN TASk
Create Database JOINTest
GO
Use JOINTest
Go
Create Table Departments (DepartmentID INT Primary Key,
		DepartmentName NvarChar(20))
Create Table Employees (EmployeeID INT Primary Key,Name Nvarchar(50), 
			Salary Decimal(10,2),DepartmentNo INT)
--INSERT SMPLE DATA
INSERT INTO Departments Values(101,'IT'),(102,'HR'),(103,'Sales'),(104,'Finance')

INSERT INTO Employees
		Values (1,'Mohamed',6000,101),
				(2,'Ahmed',7000,101),
				(3,'Sarah',4000,102),
				(4,'Ayman',6500,103),
				(5,'Mai',null,null),
				(6,'Esraa',Null,Null)

Select * From Departments
Select * from Employees
-----------Use INNER JOIN
Select EmployeeID,Name,Salary,DepartmentName
From Employees As E 
INNER JOIN Departments AS D ON D.DepartmentID=E.DepartmentNo


-----------Use LEFT JOIN
Select EmployeeID,Name,Salary,DepartmentName
From Employees As E 
LEFT JOIN Departments AS D ON D.DepartmentID=E.DepartmentNo

-----------Use RIGHT JOIN
Select EmployeeID,Name,Salary,DepartmentName
From Employees As E 
RIGHT JOIN Departments AS D ON D.DepartmentID=E.DepartmentNo

-----------Use FULL JOIN
Select EmployeeID,Name,Salary,DepartmentName
From Employees As E 
FULL JOIN Departments AS D ON D.DepartmentID=E.DepartmentNo

Use Northwind
Select OrderID,CompanyName
From Orders AS O RIGHT JOIN Customers As C ON C.CustomerID =O.CustomerID
Where OrderID IS NULL

-------------SELF JOIN
Select * From Employees
Select EMployeeID,FirstName,ReportsTo
From Employees
---SELF JOIN MUST USE TABLE ALIAS
Select Emp.EmployeeID,Emp.FirstName+' '+Emp.LastName As Employee,
	Emp.Title,
	ISNULL(MGR.FirstName,Emp.Title) As Manager
FROM Employees As EMP 
LEFT JOIN Employees As MGR ON MGR.EmployeeID=EMP.ReportsTo
