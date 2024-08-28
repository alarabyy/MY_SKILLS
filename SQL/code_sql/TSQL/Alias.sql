use Northwind
go
select ProductID , UnitPrice , Quantity*UnitPrice as total
from [Order Details]

select ProductID , UnitsInStock+UnitsOnOrder as 's+o'
from [Products]

select  EmployeeID,
        Title ,
	    FirstName+' '+LastName as 'full name',
		[dates]=HireDate,
		[phone]=HomePhone
from [Employees]

----------------------------------------------------------
select* from [Order Details]
select* from [Products]
select* from [Employees]


