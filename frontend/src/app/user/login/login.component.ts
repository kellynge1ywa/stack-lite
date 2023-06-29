import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,RouterModule } from '@angular/router';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { FormsModule, NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/state/appState/app';
import * as userActions from '../../state/actions/userAction'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterModule,NavbarComponent,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm:any={
    Email:'',
    Password:''
    

  }
  constructor(private store:Store<appState> , private router:Router){}

  ngOnInit(): void {
      
  }
  loginUser(loginForm:NgForm){
    this.store.dispatch(userActions.loginUser({user:loginForm.value}))

  }

  goToRegisterPage(){
    this.router.navigate(['users/registration'])

  }
  resetPassword(){
    this.router.navigate(['/users/resetPassword'])
  }

  adminLogin(){
    this.router.navigate(['/admin/login'])
  }


}
