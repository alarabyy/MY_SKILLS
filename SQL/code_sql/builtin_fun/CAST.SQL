-- الدالة CAST في SQL تُستخدم لتحويل نوع بيانات إلى نوع آخر

CREATE TABLE Orders (
    OrderID INT,
    OrderDate VARCHAR(10), -- تخزين التاريخ كنص
    TotalAmount VARCHAR(10) -- تخزين المبلغ الإجمالي كنص
);

INSERT INTO Orders (OrderID, OrderDate, TotalAmount) VALUES (1, '2023-01-01', '150.50');
INSERT INTO Orders (OrderID, OrderDate, TotalAmount) VALUES (2, '2023-01-02', '200.75');
INSERT INTO Orders (OrderID, OrderDate, TotalAmount) VALUES (3, '2023-01-03', '300.00');



SELECT 
    OrderID,
    CAST(OrderDate AS DATE) AS OrderDate
FROM 
    Orders;
