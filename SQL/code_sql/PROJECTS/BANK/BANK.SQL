-- إنشاء قاعدة البيانات
CREATE DATABASE BankSystem;
GO

-- استخدام قاعدة البيانات
USE BankSystem;
GO

-- إنشاء جدول العملاء
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY IDENTITY(1,1),
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DateOfBirth DATE,
    Address VARCHAR(100),
    PhoneNumber VARCHAR(15),
    Email VARCHAR(50)
);
GO

-- إنشاء جدول الحسابات
CREATE TABLE Accounts (
    AccountID INT PRIMARY KEY IDENTITY(1,1),
    CustomerID INT,
    AccountType VARCHAR(20),
    Balance DECIMAL(15,2),
    OpenDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);
GO

-- إنشاء جدول المعاملات
CREATE TABLE Transactions (
    TransactionID INT PRIMARY KEY IDENTITY(1,1),
    AccountID INT,
    TransactionDate DATETIME,
    Amount DECIMAL(15,2),
    TransactionType VARCHAR(20),
    Description VARCHAR(255),
    FOREIGN KEY (AccountID) REFERENCES Accounts(AccountID)
);
GO

-- إنشاء جدول القروض
CREATE TABLE Loans (
    LoanID INT PRIMARY KEY IDENTITY(1,1),
    CustomerID INT,
    LoanAmount DECIMAL(15,2),
    InterestRate DECIMAL(5,2),
    StartDate DATE,
    DueDate DATE,
    Status VARCHAR(20),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);
GO

-- إنشاء جدول المدفوعات
CREATE TABLE Payments (
    PaymentID INT PRIMARY KEY IDENTITY(1,1),
    LoanID INT,
    PaymentDate DATETIME,
    PaymentAmount DECIMAL(15,2),
    FOREIGN KEY (LoanID) REFERENCES Loans(LoanID)
);
GO

-- إنشاء جدول الفروع
CREATE TABLE Branches (
    BranchID INT PRIMARY KEY IDENTITY(1,1),
    BranchName VARCHAR(50),
    BranchAddress VARCHAR(100),
    BranchPhone VARCHAR(15)
);
GO

-- إنشاء جدول الموظفين
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY IDENTITY(1,1),
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Position VARCHAR(50),
    BranchID INT,
    FOREIGN KEY (BranchID) REFERENCES Branches(BranchID)
);
GO


-- إدخال بيانات تجريبية في جدول العملاء
INSERT INTO Customers (FirstName, LastName, DateOfBirth, Address, PhoneNumber, Email)
VALUES 
('Ahmed', 'Ali', '1980-05-15', '123 Main St', '1234567890', 'ahmed@example.com'),
('Fatima', 'Hussein', '1992-08-22', '456 Elm St', '0987654321', 'fatima@example.com');

-- إدخال بيانات تجريبية في جدول الحسابات
INSERT INTO Accounts (CustomerID, AccountType, Balance, OpenDate)
VALUES 
(1, 'Checking', 5000.00, '2022-01-01'),
(1, 'Savings', 3000.00, '2022-02-01'),
(2, 'Checking', 1500.00, '2022-03-01');

-- إدخال بيانات تجريبية في جدول المعاملات
INSERT INTO Transactions (AccountID, TransactionDate, Amount, TransactionType, Description)
VALUES 
(1, '2022-01-10', 1000.00, 'Deposit', 'Salary'),
(2, '2022-02-15', 500.00, 'Withdrawal', 'ATM Withdrawal'),
(3, '2022-03-20', 200.00, 'Deposit', 'Transfer from Checking');

-- إدخال بيانات تجريبية في جدول القروض
INSERT INTO Loans (CustomerID, LoanAmount, InterestRate, StartDate, DueDate, Status)
VALUES 
(1, 10000.00, 5.5, '2021-06-01', '2025-06-01', 'Active'),
(2, 5000.00, 4.5, '2022-01-15', '2026-01-15', 'Active');

-- إدخال بيانات تجريبية في جدول المدفوعات
INSERT INTO Payments (LoanID, PaymentDate, PaymentAmount)
VALUES 
(1, '2021-07-01', 200.00),
(2, '2022-02-01', 150.00);

-- إدخال بيانات تجريبية في جدول الفروع
INSERT INTO Branches (BranchName, BranchAddress, BranchPhone)
VALUES 
('Main Branch', '789 Oak St', '1122334455'),
('West Branch', '101 Pine St', '2233445566');

-- إدخال بيانات تجريبية في جدول الموظفين
INSERT INTO Employees (FirstName, LastName, Position, BranchID)
VALUES 
('Mohamed', 'Saleh', 'Manager', 1),
('Layla', 'Kamal', 'Teller', 2);


SELECT * FROM Employees,Branches

