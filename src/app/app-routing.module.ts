import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Components
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {SplashComponent} from "./splash/splash.component";
import {SignupComponent} from "./signup/signup.component";
import {Course1Component} from "./course1/course1.component";
import {Course2Component} from "./course2/course2.component";

const routes: Routes = [
  {path:'',component:SplashComponent},
  {path:'welcome',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'course1',component:Course1Component},
  {path:'course2',component:Course2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
