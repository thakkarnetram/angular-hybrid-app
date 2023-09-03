import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {IonicModule} from "@ionic/angular";
import { SplashComponent } from './splash/splash.component';
import { SignupComponent } from './signup/signup.component';
import { Course1Component } from './course1/course1.component';
import { Course2Component } from './course2/course2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SplashComponent,
    SignupComponent,
    Course1Component,
    Course2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
