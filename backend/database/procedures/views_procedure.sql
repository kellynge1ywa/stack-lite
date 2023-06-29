CREATE OR ALTER PROCEDURE views_procedure @Answer_id VARCHAR(100)

AS
BEGIN
	UPDATE answers.answers_table
	SET Views= Views + 1
	WHERE Answer_id=@Answer_id
END

EXEC views_procedure @Answer_id='T20'