import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-course1',
  templateUrl: './course1.component.html',
  styleUrls: ['./course1.component.css']
})
export class Course1Component {
  constructor(private router: Router) {
  }


  navigateToHome() {
    this.router.navigate(["/home"])
      .then(res => {
        console.log(res);
      })
  }

}
