CREATE DATABASE HOSPITAL;
GO
USE HOSPITAL;
GO
--table employees
CREATE TABLE employees
(
    EMPLOYEEID INT PRIMARY KEY,
    FIRSTNAME NVARCHAR(50),
    LASTNAME NVARCHAR(50),
    BIRTHDAY DATE,
    SALARY FLOAT,
    PHONE NVARCHAR(20),
    EMAIL NVARCHAR(50)
);

--table departments
CREATE TABLE departments
(
    DEPARTMENTID INT PRIMARY KEY,
    NAME NVARCHAR(50),
    LOCATION NVARCHAR(100)
);

--table department_employees
CREATE TABLE department_employees
(
    DEPARTMENTID INT,
    EMPLOYEEID INT,
    PRIMARY KEY (DEPARTMENTID, EMPLOYEEID),
    FOREIGN KEY (DEPARTMENTID) REFERENCES departments(DEPARTMENTID),
    FOREIGN KEY (EMPLOYEEID) REFERENCES employees(EMPLOYEEID)
);

--table nurses
CREATE TABLE Nurses
(
    NurseID INT PRIMARY KEY,
    FirstName NVARCHAR(50),
    LastName NVARCHAR(50),
    BirthDate DATE,
    Salary FLOAT,
    Phone NVARCHAR(20),
    Email NVARCHAR(50),
    DepartmentID INT,
    FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);


--table Doctors
CREATE TABLE Doctors
(
    DoctorID INT PRIMARY KEY,
    FirstName NVARCHAR(50),
    LastName NVARCHAR(50),
    BirthDate DATE,
    Salary FLOAT,
    Phone NVARCHAR(20),
    Email NVARCHAR(50),
    DepartmentID INT,
    FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);


--table Patients
CREATE TABLE Patients
(
    PatientID INT PRIMARY KEY,
    FirstName NVARCHAR(50),
    LastName NVARCHAR(50),
    BirthDate DATE,
    Phone NVARCHAR(20),
    Email NVARCHAR(50)
);


--table Doctor_Patients
CREATE TABLE Doctor_Patients
(
    DoctorID INT,
    PatientID INT,
    PRIMARY KEY (DoctorID, PatientID),
    FOREIGN KEY (DoctorID) REFERENCES Doctors(DoctorID),
    FOREIGN KEY (PatientID) REFERENCES Patients(PatientID)
);


--table Statements
CREATE TABLE Statements
(
    StatementID INT PRIMARY KEY,
    DoctorID INT,
    StatementDate DATE,
    Amount FLOAT,
    Description NVARCHAR(255),
    FOREIGN KEY (DoctorID) REFERENCES Doctors(DoctorID)
);

--table Medicine
CREATE TABLE Medicine
(
    MedicineID INT PRIMARY KEY,
    Name NVARCHAR(100),
    Description NVARCHAR(255),
    ExpiryDate DATE,
    Price FLOAT
);


--table Medicine_Patients
CREATE TABLE Medicine_Patients
(
    MedicineID INT,
    PatientID INT ,
	primary key (MedicineID,PatientID),
	foreign key (MedicineID) references Medicine(MedicineID),
	foreign key (PatientID) references Patients(PatientID),

);

