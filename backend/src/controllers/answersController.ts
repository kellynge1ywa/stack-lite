import {Request,RequestHandler,Response} from "express"
import mssql from 'mssql'
import {sqlConfig} from "../config";
import {answersValidationSchema} from '../helpers/answersValidation'
import {v4 as uid} from 'uuid'


interface codedData{
    User_id:string
    Fullname:string,
    Email:string,
    Username:string,
}

interface ExtendedRequest extends Request{
    body:{
        Answer_id:string
        User_id:string
        Question_id:string
        Answers:string
    }
    info?:codedData
    params:{
        Answer_id:string
       }
}
interface answers{
    Answer_id: string
    User_id:string
    Question_id:string
    Answers:string
    Upvotes:number
    Downvotes:number
    Deleted:number
}

//add answer
export const addAnswer=async(req:ExtendedRequest,res:Response)=>{
    try {
        const Answer_id=uid()

        const pool=await mssql.connect(sqlConfig)

        const{Question_id,Answers}=req.body

        const {error}=answersValidationSchema.validate(req.body)

        if(error){
            return res.status(404).json(error.details[0].message)
        }

        await pool.request()
        .input('Answer_id',Answer_id)
        .input('User_id',req.info?.User_id)
        .input('Question_id',Question_id)
        .input('Answers',Answers)
        .execute('add_answerProcedure')

        return res.status(200).json({message:"You've answered the selected question"})
        
    } catch (error:any) {
        return res.status(500).json(error.message) 

        
    }
}


//get all answers

export const getAllAnswers:RequestHandler=async (req,res)=>{
    try {
        const pool=await mssql.connect(sqlConfig)

        let answer:answers[]=await(await pool.request().execute('get_All_Answers')).recordset
        return res.status(200).json(answer)
        
    } catch (error:any) {
        return res.status(500).json(error.message) 

        
    }
}

//get one answer
export const getOneAnswer:RequestHandler<{Answer_id:string}>=async(req,res)=>{
    try {
        const {Answer_id}=req.params
        const pool=await mssql.connect(sqlConfig)
        let answer:answers=await((await pool.request()
        .input('Answer_id',Answer_id)
        
        .execute('get_One_Answer')).recordset[0])

        if(!answer){
            return res.status(404).json({message:"Answer not found"}) 
        }

        return res.status(201).json(answer)
        
    } catch (error:any) {
        return res.status(500).json(error.message) 

        
    }
}


//delete answer

export const deleteAnswer:RequestHandler<{Answer_id:string}>=async(req,res)=>{
    try {
        const {Answer_id}=req.params
        const pool=await mssql.connect(sqlConfig)
        let answer:answers=await((await pool.request()
        .input('Answer_id',Answer_id)
        
        .execute('get_One_Answer')).recordset[0])

        if(answer){
            return res.status(404).json({message:"Answer not found"}) 
        }
        await pool.request()
        .input('Answer_id',Answer_id)
        .execute('delete_answer')

        return res.status(201).json({message:"Selected answer was successfully deleted"})
        
    } catch (error:any) {
        return res.status(500).json(error.message) 

        
    }
}




//upvote endpoint

export const upvote:RequestHandler<{Answer_id:string}>=async(req,res)=>{
    try {
        const {Answer_id}=req.params
        const pool=await mssql.connect(sqlConfig)
        let answer:answers[]=await((await pool.request()
        .input('Answer_id',Answer_id)
        
        .execute('get_One_Answer')).recordset[0])

        if(answer){
            let upvote=answer[0].Upvotes
        }

        return res.status(201).json(answer)
        
    } catch (error:any) {
        return res.status(500).json(error.message) 

        
    }
}

