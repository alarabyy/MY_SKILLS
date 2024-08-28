Use Northwind;
GO
CREATE VIEW MyView
AS
	SELECT EmployeeID As Code,FirstName+' '+LastName AS SalesPerosn,
		CAST(HireDate As DATE)As Hire
	From Employees

Go
--SELECT FROM VIEW
Select * From MyView
GO
---------ExAMPLE 2
CREATE VIEW SalesReport
AS
	SELECT OD.OrderID,Companyname,FirstName,
	Month(OrderDate) As [MOnth],
		SUM(UnitPrice*Quantity) AS Total -- MUST USE Alias
	FROM Orders As O JOIN Customers As C ON C.CustomerID=O.CustomerID
		JOIN Employees AS E ON E.EmployeeID=O.EmployeeID
		JOIN [Order Details] As OD ON O.OrderID=OD.OrderID
	Where Year(OrderDate)=1997
	GROUP BY OD.OrderID,Companyname,FirstName,Month(OrderDate)
GO
-----------
SELECT * FROM SalesReport