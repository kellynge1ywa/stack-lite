import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import * as userSelectors from '../../state/selector/userSelector'
import * as usersActions from '../../state/actions/userAction'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Users } from 'src/app/data/users/users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,NavbarComponent,RouterModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  User_id!:string

  constructor(private store:Store){}

  ngOnInit(): void {
      
  }

  ViewProfile(){
    this.store.dispatch(usersActions.getOneUser({User_id:this.User_id}))
    this.store.select(userSelectors.getOneUserSuccess)
  }

}
