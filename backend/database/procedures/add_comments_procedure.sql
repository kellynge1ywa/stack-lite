CREATE OR ALTER PROCEDURE add_comment_procedure(@Comment_id VARCHAR(100),@User_id INT,@Answer_id VARCHAR(100),@Comments VARCHAR(100))

AS
BEGIN
INSERT INTO comments.comment_table(Comment_id,User_id,Answer_id,Comments) 
VALUES(@Comment_id,@User_id,@Answer_id, @Comments)

END

EXEC add_comment_procedure @Comment_id='C67',@User_id=1,@Answer_id='T23',@Comments='Haha'

SELECT * FROM comments.comment_table