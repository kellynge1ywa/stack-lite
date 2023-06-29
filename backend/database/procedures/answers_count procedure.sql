CREATE OR ALTER PROCEDURE answers_count @Question_id VARCHAR(100)

AS
BEGIN
	UPDATE questions.question_table
	SET Answers=Answers + 1
	WHERE Question_id=@Question_id
END

EXEC answers_count @Question_id='T78'