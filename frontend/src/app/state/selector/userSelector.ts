import { createFeatureSelector, createSelector } from "@ngrx/store";
import { userState } from "../reducers/userReducer";






const userState=createFeatureSelector<userState>('users')
export const registerSuccess=createSelector(userState,(state)=>state.registrationSuccess)
export const registerError=createSelector(userState,(state)=>state.registrationerror)

//login user
export const loginSuccess=createSelector(userState,(state)=>state.loginSuccess)
export const loginError=createSelector(userState,(state)=>state.loginError)

//get all users

export const getAllUserSuccess=createSelector(userState,(state)=>state.getUsersSuccess)
export const getAllUserError=createSelector(userState,(state)=>state.getUsersError)

//get one user
export const getOneUserSuccess=createSelector(userState,(state)=>state.getOneUserSuccess)
export const getOneUserError=createSelector(userState,(state)=>state.getOneUserError)

//delete one user
export const deleteUserSuccess=createSelector(userState,(state)=>state.deleteUserSuccess)
export const deleteUserError=createSelector(userState,(state)=>state.deleteUserError)


