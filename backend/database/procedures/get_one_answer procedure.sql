CREATE OR ALTER PROCEDURE get_One_Answer @Answer_id varchar(100)
	

AS
BEGIN
SELECT * FROM answers.answers_table WHERE Answer_id=@Answer_id AND Deleted=0

END


