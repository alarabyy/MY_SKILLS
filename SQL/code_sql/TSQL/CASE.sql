use Northwind
select  ShippedDate , ShipVia , ShipCity,
case ShipCity
when 'Reims' then 'heloooo'
else ShipCity
end
from [Orders]

select * from [Orders]
---------------------------------------------

use Northwind
select distinct SupplierID ,
case ProductName
when 'Chai' then 'baaaayeeee'
else ProductName 
end as ProductName
from [Products] 

select * from [Products]

---------------------------------------------
use Northwind
go
select Employeeid,title,country,
case 
when Employeeid <5 then 'vip' 
when Employeeid <8 then 'vip-1' 
when Employeeid <10 then 'vip-2' 
when Employeeid <12 then 'vip-3' 
when Employeeid <15 then 'vip-4' 
else 'other'
end as rate
from Employees

select * from [Employees]

---------------------------------------------
use Northwind
go
select ProductName ,UnitPrice,
case
when  UnitPrice <20 then 'low price'
when  UnitPrice <30 then 'normal price'
when  UnitPrice <40 then 'hight price'
else 'otheres'
end as rang
from Products
select * from [Products]
-----------------------------------------------
moohamed alsaid abdalrahamn mohamed