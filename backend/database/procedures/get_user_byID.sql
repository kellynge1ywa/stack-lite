CREATE OR ALTER PROCEDURE GetUserById(@User_id INT)
AS
BEGIN
SELECT * FROM users.new_user_table  WHERE @User_id=@User_id AND Deleted=0

END