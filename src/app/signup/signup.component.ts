import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import * as FormActions from "../store/actions/form.action"
import {Form} from "../store/model/form.model"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  // formState$ = this.store.select((state: any) => state.form);
  constructor(private router : Router ) {
  }
  ngOnInit(): void {
  }

  // setFirstName(firstName:string){
  //   this.store.dispatch(FormActions.setFirstName({firstName}));
  // }
  // setLastName(lastName:string){
  //   this.store.dispatch(FormActions.setLastName({lastName}));
  // }
  //
  // setEmail(email:string) {
  //   this.store.dispatch(FormActions.setEmail({email}));
  // }
  //
  // setPassword(password:string){
  //   this.store.dispatch(FormActions.setPassword({password}))
  // }

  register(){
    this.router.navigate(['/home']).then(res => console.log(res))
  }
}
