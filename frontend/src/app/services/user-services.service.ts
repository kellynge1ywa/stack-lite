import { Injectable } from '@angular/core';
import { Users, loginSuccess, login_info, registrationSuccess, user_info } from '../data/users/users';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private http:HttpClient) { }
  registerUser(user:user_info):Observable<registrationSuccess>{
    console.log("User", user)
    return this.http.post<registrationSuccess>('http://localhost:5500/users',user)

  }
  loginUser(user:login_info):Observable<loginSuccess>{
    return this.http.post<loginSuccess>('http://localhost:5500/users/login',user)
  }

  getAllUsers():Observable<Users[]>{
    return this.http.get<Users[]>('http://localhost:5500/users')
  }

  getOneUser(User_id:string):Observable<Users>{
    return this.http.get<Users>(`http://localhost:5500/users/one/${User_id}`)
  }

  deleteUser(User_id:string):Observable<Users>{
    return this.http.delete<Users>(`http://localhost:5500/users/${User_id}`)
  }
}
