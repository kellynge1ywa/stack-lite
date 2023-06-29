import joi from 'joi'


export const answersValidationSchema=joi.object({
    Question_id:joi.string().required(),
    Answers:joi.string().required(),
    
   
    // Confirm_password:joi.ref('Password')

})