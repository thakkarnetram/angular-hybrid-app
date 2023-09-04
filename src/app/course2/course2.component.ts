import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-course2',
  templateUrl: './course2.component.html',
  styleUrls: ['./course2.component.css']
})
export class Course2Component {
  constructor(private router:Router) {
  }
  navigateToHome() {
    this.router.navigate(["/home"])
      .then(res => {
        console.log(res);
      })
  }
}
