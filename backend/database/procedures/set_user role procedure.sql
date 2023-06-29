CREATE OR ALTER PROCEDURE set_roles_procedures @User_id INT

AS
BEGIN
	UPDATE users.new_user_table
	SET User_role=0;

	UPDATE users.new_user_table
	SET User_role=1
	WHERE User_id=@User_id

	SELECT * FROM users.new_user_table 
	WHERE User_id=@User_id


END

