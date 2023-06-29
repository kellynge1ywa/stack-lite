import { Action } from "@ngrx/store"

export interface user_info{
    Email:any,
    Fullname:any,
    Username:any,
    User_password:any,
    
}

export interface Users{
    User_id:string
    Fullname:string,
    Email:string,
    Username:string,
    User_password:string,
    Confirm_password:string,
    User_role:string,
    Email_sent:number,
    Reset_password:number,
    Deleted:number
}

export interface registrationSuccess{
    message:string
}

export interface loginSuccess{
    message:string
}

export interface deleteSuccess extends Action{
    message:string
}


export interface login_info{
    Email:any,
    Password:any,

}

export interface reset_password{
    Email:any,
}

export interface adminLogin{
    Email:any,
    Username:any,
    Password:any
}