import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,NavbarComponent,RouterModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class AdminLoginComponent {
  constructor(private router:Router){}

  navigateToAdmin(adminLoginForm:NgForm){
    if(adminLoginForm.valid){
    this.router.navigate(['admin/admin-dashboard'])


    }
  }
  goToUserPage(){
    this.router.navigate(['/users/login'])
  }


}
