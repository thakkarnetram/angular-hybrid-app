import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-purchased1',
  templateUrl: './purchased1.component.html',
  styleUrls: ['./purchased1.component.css']
})
export class Purchased1Component implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(["/course1"])
        .then((res) => {
          console.log(res)
        });
    }, 3000)
  }

}
