import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-purchased2',
  templateUrl: './purchased2.component.html',
  styleUrls: ['./purchased2.component.css']
})
export class Purchased2Component implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(["/course2"])
        .then((res) => {
          console.log(res)
        })
    }, 3000)
  }

}
