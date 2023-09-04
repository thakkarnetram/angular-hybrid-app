import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule , ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {IonicModule} from "@ionic/angular";
import { SplashComponent } from './splash/splash.component';
import { SignupComponent } from './signup/signup.component';
import { Course1Component } from './course1/course1.component';
import { Course2Component } from './course2/course2.component';
import { Purchased1Component } from './purchased1/purchased1.component';
import { Purchased2Component } from './purchased2/purchased2.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SplashComponent,
    SignupComponent,
    Course1Component,
    Course2Component,
    Purchased1Component,
    Purchased2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
