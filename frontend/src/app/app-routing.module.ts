import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionsComponent } from './questions/questions.component';
import { AnswersComponent } from './answers/answers.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import{AdminLoginComponent} from './admin/login/login.component'
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';
import { UserComponent } from './user/user/user.component';
import { AddQuestionComponent } from './questions/add-question/add-question.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ProductsComponent } from './products/products.component';
import { SingleQuestionComponent } from './questions/single-question/single-question.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'users/dashboard',component:UserComponent},
  {path:'questions',component:QuestionsComponent},
  {path:'questions/add-question',component:AddQuestionComponent},
  {path:'questions/single-question',component:SingleQuestionComponent},
  {path:'answers',component:AnswersComponent},
  {path:'products',component:ProductsComponent},
  {path:'comments',component:CommentsComponent},
  {path:'admin/login',component:AdminLoginComponent},
  {path:'admin/admin-dashboard',component:AdminDashboardComponent},
  {path:'users/registration',component:RegistrationComponent},
  {path: 'users/resetPassword',component:ResetPasswordComponent},
  
  {path:'users/login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
