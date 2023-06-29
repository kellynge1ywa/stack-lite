import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,RouterModule } from '@angular/router';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { user_info } from 'src/app/data/users/users';
import { FormsModule, NgForm } from '@angular/forms';

import * as userActions from '../../state/actions/userAction'
import { Store } from '@ngrx/store';
import { appState } from 'src/app/state/appState/app';
// import { log } from 'console';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule,RouterModule,NavbarComponent,RouterModule,FormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  registrationForm:any={
    Email:'',
    Fullname:'',
    Username:'',
    Password:''
    

  }

  


  // user_info:user_info={...this.initialuser_info}

  constructor(private store:Store<appState> ,  private router:Router){}

  ngOnInit(): void {
      
  }

  onSubmit(registrationForm:NgForm){
    console.log(registrationForm.value)
    this.store.dispatch(userActions.register({user:registrationForm.value}))
    // console.log(registrationForm.value);
    
    // t(registration'ndj')
    
  }

  goToLoginPage(){
    this.router.navigate(['users/login'])

  }


}
