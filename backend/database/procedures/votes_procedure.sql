CREATE OR ALTER PROCEDURE vote_procedure @Answer_id VARCHAR(100), @Vote_type VARCHAR (10)

AS
BEGIN
	IF @Vote_type='upvote'
	BEGIN
		UPDATE answers.answers_table
		SET Upvotes= Upvotes + 1
		WHERE Answer_id=@Answer_id
	END

	ELSE IF @Vote_type='downvote'
	BEGIN
		UPDATE answers.answers_table
		SET Downvotes= Downvotes + 1
		WHERE Answer_id=@Answer_id
	END


END;

EXEC vote_procedure @Answer_id='T23', @Vote_type='upvote'

EXEC vote_procedure @Answer_id='T10', @Vote_type='downvote'