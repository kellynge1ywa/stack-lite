CREATE OR ALTER  PROCEDURE get_One_Comment @Comment_id varchar(100)
	

AS
BEGIN
SELECT * FROM comments.comment_table WHERE Comment_id=@Comment_id AND Deleted=0

END

EXEC get_One_Comment @Comment_id='C67'