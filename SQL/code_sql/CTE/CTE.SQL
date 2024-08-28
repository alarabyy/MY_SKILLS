--CTE COMMON Table Exression
With MyCTE
AS
(SELECT OD.OrderID,Companyname,FirstName,
		Month(OrderDate) As [MOnth],
		SUM(UnitPrice*Quantity) AS Total -- MUST USE Alias
		FROM Orders As O JOIN Customers As C ON C.CustomerID=O.CustomerID
		JOIN Employees AS E ON E.EmployeeID=O.EmployeeID
		JOIN [Order Details] As OD ON O.OrderID=OD.OrderID
		Where Year(OrderDate)=1997
		GROUP BY OD.OrderID,Companyname,FirstName,Month(OrderDate))
Select *From MyCTE
Go