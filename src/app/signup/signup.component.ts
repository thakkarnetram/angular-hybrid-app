import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // fake model
  firstName: String = "";
  lastName: String = "";
  email: String = "";
  password: String = "";

  constructor(private router: Router) {
  }

  onSignup() {
   fetch("http://192.168.1.2:4300/auth/api/v1/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      })
    }).then((res) => {
      if(res.ok) {
        this.router.navigate(['/home']).then(res => console.log(res))
      }
    }).catch((e)=>{
      console.log("Error" , e)
    })
  }


  ngOnInit() {
  }


  register() {

  }
}
