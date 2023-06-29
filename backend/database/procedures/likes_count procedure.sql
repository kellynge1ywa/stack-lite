CREATE OR ALTER PROCEDURE likes_counts @Question_id VARCHAR(100)

AS
BEGIN
	UPDATE questions.question_table
	SET Likes=Likes + 1
	WHERE Question_id=@Question_id
END

EXEC likes_counts @Question_id='T78'