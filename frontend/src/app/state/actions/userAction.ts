import { createAction, props } from "@ngrx/store";
import {Users, loginSuccess, login_info, registrationSuccess, user_info } from "src/app/data/users/users";



//add user actions


export const register = createAction('[users]-Register', props<{user: user_info }>())


export const registerSuccess = createAction('[users]-RegisterSuccess', props<{ message: registrationSuccess}>())


export const registerError = createAction('[users]-RegisterError', props<{ error: string }>())


//get all users
export const getAllUser = createAction('[users]-GetAllUser')


export const getAllUserSuccess = createAction('[users]-GetAllUserSuccess', props<{Users:Users[]}>())


export const getAllUserError = createAction('[users]-GetAllUserError', props<{ error: string }>())

//get one user

export const getOneUser=createAction('[users]-GetOneUser',props<{User_id:string}>());

export const GetOneUserSuccess=createAction('[Users]-GetOneUserSuccess',props<{User:Users}>());

export const GetOneUserError=createAction('[users]-GetOneUserError',props<{error:string}>());

//delete user

export const deleteUser=createAction('[Users]-Deleteuser',props<{User_id:string}>());

export const deleteUserSuccess=createAction('[Users]-DeleteUserSuccess');

export const deleteUserError=createAction('[Users]-DeleteUserError',props<{error:string}>())

//login user
export const loginUser=createAction('[Users]-LoginUser',props<{user:login_info}>());
export const loginUserSuccess=createAction('[Users]-LoginUserSuccess',props<{message:loginSuccess}>())
export const loginUserError=createAction('[Users]-LoginUserError',props<{error:string}>())
