import { Injectable } from "@angular/core";
import * as userActions from "../actions/userAction";
import {Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { UserServicesService } from "src/app/services/user-services.service";
import { Users } from "src/app/data/users/users";



@Injectable()

export class userEffects{
    constructor(private actions$:Actions, private userServices:UserServicesService){}
    registerUser$=createEffect(()=>{
        return this.actions$.pipe(
            ofType(userActions.register),
            mergeMap(action=>{
                return this.userServices.registerUser(action.user).pipe(
                    map(message=>{
                        console.log(message);
                        return userActions.registerSuccess({message})
                    })
                )
            }),
            catchError(error=>{
                return of(userActions.registerError(error))
            })
        )
    });

    //login user
    loginUser$=createEffect(()=>{
        return this.actions$.pipe(
            ofType(userActions.loginUser),
            mergeMap(action=>{
                return this.userServices.loginUser(action.user).pipe(
                    map(message=>{
                        return userActions.loginUserSuccess({message})
                    })
                )
            }),
            catchError(error=>{
                return of(userActions.loginUserError(error))
            })
        )
    })

    //get all users effect

    getAllUsers$=createEffect(()=>{
        return this.actions$.pipe(
            ofType(userActions.getAllUser),
            mergeMap(()=>this.userServices.getAllUsers().pipe(
                     map((Users)=>userActions.getAllUserSuccess({Users})),
                )
            
            ),
            catchError(error=>{
                return of(userActions.getAllUserError(error))
            })

        )
    });

    // get one user effect

    getOneUser$=createEffect(()=>{
        return this.actions$.pipe(
            ofType(userActions.getOneUser),
            mergeMap(({User_id})=> this.userServices.getOneUser(User_id).pipe(
                map((User)=>userActions.GetOneUserSuccess({User})),
            )),
            catchError(error=>{
                return of(userActions.GetOneUserError(error))
            })
        )
    })

    //delete use effect
    deleteUser$=createEffect(()=>{
        return this.actions$.pipe(
            ofType(userActions.deleteUser),
            mergeMap(({User_id})=> this.userServices.deleteUser(User_id).pipe(
                map(()=>userActions.deleteUserSuccess())
            )),
            catchError(error=>{
                return of(userActions.deleteUserError(error))
            })
        )
    })

    

}