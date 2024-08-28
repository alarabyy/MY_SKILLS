CREATE TABLE Logs (
    LogID INT,
    LogDateTime VARCHAR(50), -- تخزين التاريخ والوقت كنص
    Message VARCHAR(255)
);

INSERT INTO Logs (LogID, LogDateTime, Message) VALUES (1, 'April 1, 2023 12:34:56', 'System started.');
INSERT INTO Logs (LogID, LogDateTime, Message) VALUES (2, 'April 2, 2023 13:45:00', 'User login.');
INSERT INTO Logs (LogID, LogDateTime, Message) VALUES (3, 'April 3, 2023 14:50:10', 'Error occurred.');




SELECT 
    LogID,
    LogDateTime,
    PARSE(LogDateTime AS DATETIME USING 'en-US') AS ParsedLogDateTime
FROM 
    Logs;
