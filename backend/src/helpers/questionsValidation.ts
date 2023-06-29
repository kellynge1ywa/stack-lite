import joi from 'joi'


export const questionsValidationSchema=joi.object({
    Question:joi.string().required().min(3),
    Tags:joi.string().required(),
    Body:joi.string().required().min(5),
   
    // Confirm_password:joi.ref('Password')

})