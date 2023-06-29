import {Request,RequestHandler,Response} from "express"
import mssql from 'mssql'
import {commentsValidationSchema} from '../helpers/commentsValidation'
import {sqlConfig} from "../config";
import {v4 as uid} from 'uuid'

interface codedData{
    User_id:string
    Fullname:string,
    Email:string,
    Username:string,
}

interface ExtendedRequest extends Request{
    body:{
        Comment_id:string
        User_id:string
        Answer_id:string
        Comments:string
    }
    info?:codedData
    params:{
        Comment_id:string
       }
}
interface comments{
    Comment_id: string
    User_id:string
    Answer_id:string
    Comments:string
    Deleted:number
}

//add comments
export const addComment=async (req:ExtendedRequest,res:Response)=>{
    try {
        const pool=await mssql.connect(sqlConfig)

        const Comment_id=uid()

        const{Answer_id,Comments}=req.body
        const {error}=commentsValidationSchema.validate(req.body)
        if(error){
            return res.status(404).json(error.details[0].message)
        }


        await pool.request()
        .input('Comment_id',Comment_id)
        .input('Answer_id',Answer_id)
        .input('User_id',req.info?.User_id)
        .input('Comments',Comments)
        .execute('add_comment_procedure')

        return res.status(201).json({message:"You have commented to the selected answer"})
        
    } catch (error:any) {
        return res.status(500).json(error.message)   
    }
}


//get all comments

export const getAllComments:RequestHandler=async (req,res)=>{
    try {
        const pool=await mssql.connect(sqlConfig)

        let comment:comments[]=await(await pool.request().execute('get_All_Comments')).recordset
        return res.status(200).json(comment)
        
    } catch (error:any) {
        return res.status(500).json(error.message) 

        
    }
}

//get one comment

export const getOneComment:RequestHandler<{Comment_id:string}>=async(req,res)=>{
    try {
        const {Comment_id}=req.params
        const pool=await mssql.connect(sqlConfig)
        let comment:comments=await((await pool.request()
        .input('Comment_id',Comment_id)
        
        .execute('get_One_Comment')).recordset[0])

        if(!comment){
            return res.status(404).json({message:"Answer not found"}) 
        }

        return res.status(201).json(comment)
        
    } catch (error:any) {
        return res.status(500).json(error.message) 

        
    }
}


//delete comment
export const deleteComment:RequestHandler<{Comment_id:string}>=async(req,res)=>{
    try {
        const {Comment_id}=req.params
        const pool=await mssql.connect(sqlConfig)
        let comment:comments=await((await pool.request()
        .input('Comment_id',Comment_id)
        
        .execute('get_One_Comment')).recordset[0])

        if(!comment){
            return res.status(404).json({message:"comment not found"}) 
        }
        await pool.request()
        .input('Comment_id',Comment_id)
        .execute('delete_comment')

        return res.status(201).json({message:"You have deleted the selected comment"})
        
    } catch (error:any) {
        return res.status(500).json(error.message) 

        
    }
}



