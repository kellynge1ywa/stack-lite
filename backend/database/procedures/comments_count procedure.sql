CREATE OR ALTER PROCEDURE comment_counts @Answer_id VARCHAR(100)

AS
BEGIN
	UPDATE answers.answers_table
	SET Comments=Comments + 1
	WHERE Answer_id=@Answer_id
END

EXEC comment_counts @Answer_id='T10'