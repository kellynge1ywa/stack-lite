import { Router } from "express";
import { addComment, deleteComment, getAllComments, getOneComment } from "../controllers/commentsController";
import { tokenVerify } from "../middlewares/tokenVerification";


const commentRoutes=Router()
commentRoutes.post('',tokenVerify,addComment)
commentRoutes.get('/all',tokenVerify,getAllComments)
commentRoutes.get('/:Comment_id',tokenVerify,getOneComment)
commentRoutes.delete('/:Comment_id',tokenVerify,deleteComment)



export default commentRoutes