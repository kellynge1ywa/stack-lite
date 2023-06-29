CREATE OR ALTER PROCEDURE GetUserByEmail(@Email VARCHAR(100))
AS
BEGIN
SELECT * FROM users.new_user_table  WHERE Email=@Email AND Deleted=0

END