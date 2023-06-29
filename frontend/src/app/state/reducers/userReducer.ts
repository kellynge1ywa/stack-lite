import { Action, createReducer, on } from "@ngrx/store";
import { Users, deleteSuccess, loginSuccess, registrationSuccess, user_info } from "src/app/data/users/users"
import * as UserActions from '../actions/userAction'

export interface userState{
    registrationSuccess:registrationSuccess,
    registrationerror: string,
    loginSuccess:loginSuccess,
    loginError:string,
    getUsersSuccess:Users[],
    getUsersError:string,
    getOneUserSuccess:Users | null,
    getOneUserError:string,
    deleteUserSuccess: any,
    deleteUserError:string
}


export const initialState:userState={
    registrationSuccess:{message:""},
    registrationerror: "",
    loginSuccess:{message:""},
    loginError:'',
    getUsersSuccess:[],
    getUsersError:"",
    getOneUserSuccess: null,
    getOneUserError:"",
    deleteUserSuccess: {},
    deleteUserError:""



}




export const UserReducer = createReducer(
    initialState,
    
    on(UserActions.registerSuccess, (state, action):userState=>{
        return {
            ...state,
            registrationSuccess:action.message,
            registrationerror:''
        }
    }),
    on(UserActions.registerError,(state,action):userState=>{
        return{
            ...state,
            registrationerror:action.error,
            registrationSuccess:{message:""}
        }
    }),

    //login user
    on(UserActions.loginUserSuccess,(state,action):userState=>{
        return{
            ...state,
            loginSuccess:action.message,
            loginError:''
        }
    }),
    on(UserActions.loginUserError,(state,action):userState=>{
        return{
            ...state,
            loginError:action.error,
            loginSuccess:{message:""}
        }
    }),

    //get all users
    on(UserActions.getAllUserSuccess,(state,action):userState=>{
        return {
            ...state,
            getUsersSuccess:action.Users,
            getUsersError:''
        }
    }),
    on(UserActions.getAllUserError,(state,action):userState=>{
        return{
            ...state,
            getUsersError:action.error,
            getUsersSuccess:[]
        }
    }),

    //getOneuser
    on(UserActions.GetOneUserSuccess,(state,action):userState=>{
        return{
            ...state,
            getOneUserSuccess:action.User,
            getOneUserError:''
        }
    }),
    on(UserActions.GetOneUserError,(state,action):userState=>{
        return{
            ...state,
            getOneUserError:action.error,
            getOneUserSuccess: null
        }
    }),

    //delete user
    on(UserActions.deleteUserSuccess,(state,action):userState=>{
        return{
            ...state,
            deleteUserSuccess:action.type,
            deleteUserError:''

        }
    }),

    on(UserActions.deleteUserError,(state,action):userState=>{
        return{
            ...state,
            deleteUserError:action.error,
            deleteUserSuccess:''
        }
    })


)