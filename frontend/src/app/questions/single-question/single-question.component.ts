import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-question',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.css']
})
export class SingleQuestionComponent {
  isCommentFormOpen:boolean=false;
 constructor (private router:Router){}

 goToCommentPage(){
  this.router.navigate(['comments'])
 }
}
