import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  likes: number = 1000;

  constructor() { }

  ngOnInit() {
  }

  increment(e: Event) {
    console.log("Click ", e);
    this.likes++;
  }

}
