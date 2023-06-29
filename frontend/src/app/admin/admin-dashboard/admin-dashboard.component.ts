import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {NavbarComponent} from '../../navbar/navbar.component'
import { Store } from '@ngrx/store';
import * as userSelectors from '../../state/selector/userSelector'
import * as usersActions from '../../state/actions/userAction'

import { Observable } from 'rxjs';
import { Users } from 'src/app/data/users/users';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule,NavbarComponent, RouterModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  Users!:Observable<Users[]>

  constructor(private store:Store){}


  ngOnInit(): void {
    this.store.dispatch(usersActions.getAllUser())
    this.Users= this.store.select(userSelectors.getAllUserSuccess)
    
  }

  deleteUser(User_id:string){
    this.store.dispatch(usersActions.deleteUser({User_id}))

  }


}
