import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  course1(){
    this.router.navigate(["/purchased1"]).then((res) => {
      console.log(res);
    })
  }

  course2(){
    this.router.navigate(["/purchased2"]).then((res) => {
      console.log(res);
    })
  }

  logout() {
    this.router.navigate(["/welcome"]).then((res) => {
      console.log(res);
    })
  }
}
