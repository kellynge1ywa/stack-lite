const request=require('supertest')

const app=require('../dist/server')
// const { test } = require('node:test')

describe('users',()=>{
    describe('displayAllUsers',()=>{
        test('Test should return all users',async()=>{
            const response=await request(app).get('/users')
            expect(response.statusCode).toBe(200)
        })

    }),
    describe('displayOneUsers',()=>{
        test('Test should return user by id',async()=>{
            const User_id='18c577ff-eaa2-492d-a35f-0387ed6e2f60'
            const response=await request(app).get(`/users/one/${User_id}`)
            expect(response.statusCode).toBe(200)
        })

    }),
    describe('displayOneUsers',()=>{
        test('Test should return  user by email',async()=>{
            const Email='k06697kngeiywa119@gmail.com'
            const response=await request(app).get(`/users/${Email}`)
            expect(response.statusCode).toBe(200)
        })

    }),
    describe('delete user',()=>{
        test('Test should delete user',async()=>{
            const User_id='18c577ff-eaa2-492d-a35f-0387ed6e2f60'
            const response=await request(app).delete(`/users/${User_id}`)
            expect(response.statusCode).toBe(201)
        })

    })


}),

describe('questions',()=>{
    describe('displayAllQuestions',()=>{
        test('Test should return all questions',async()=>{
            const response=await request(app).get('/questions')
            expect(response.statusCode).toBe(200)
        })

    }),
    describe('displayOneQuestion',()=>{
        test('Test should return single question',async()=>{
            const Question_id='b0f0defc-bb14-4e70-a572-154f583f565f'
            const response=await request(app).get(`/questions/${Question_id}`)
            expect(response.statusCode).toBe(200)
        })

    }),
    
    describe('delete question',()=>{
        test('Test should delete question',async()=>{
            const Question_id='b0f0defc-bb14-4e70-a572-154f583f565f'
            const response=await request(app).delete(`/questions/${Question_id}`)
            expect(response.statusCode).toBe(201)
        })

    })


}),
describe('Answers',()=>{
    describe('displayAllAnswers',()=>{
        test('Test should return all answers',async()=>{
            const response=await request(app).get('/answers')
            expect(response.statusCode).toBe(200)
        })

    }),
    describe('displayOneAnswer',()=>{
        test('Test should return single answer',async()=>{
            const Answer_id='e46929ea-0405-4be8-92fe-5e729f85f57d'
            const response=await request(app).get(`/answers/${Answer_id}`)
            expect(response.statusCode).toBe(200)
        })

    }),
    
    describe('delete answer',()=>{
        test('Test should delete answer',async()=>{
            const Answer_id='e46929ea-0405-4be8-92fe-5e729f85f57d'
            const response=await request(app).delete(`/answers/${Answer_id}`)
            expect(response.statusCode).toBe(201)
        })

    })


})

