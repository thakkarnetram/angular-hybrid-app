import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {SplashComponent} from "./splash/splash.component";

const routes: Routes = [
  {path:'',component:SplashComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
