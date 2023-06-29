import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CommonModule,NavbarComponent,RouterModule],
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {
 constructor (private router:Router){}

 goToOnePage(){
  this.router.navigate(['questions/single-question'])

 }
 goToCommentPage(){
  this.router.navigate(['comments'])
 }
}
