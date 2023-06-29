import joi from 'joi'


export const commentsValidationSchema=joi.object({
    Answer_id:joi.string().required(),
    Comments:joi.string().required(),
    
   
    // Confirm_password:joi.ref('Password')

})