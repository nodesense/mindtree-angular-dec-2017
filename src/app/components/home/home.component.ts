import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

  //provider
  providers: [
    //per component instance service
    //created when component created
    //DataService
  ]
})
export class HomeComponent implements OnInit {

  likes: number;

  price: number = 99.99;
  title: string = 'Home';
  today: Date = new Date();

  //dependency injection
  //inject service instance
  //@Inject () to inject by value
  constructor(private dataService:DataService, 
              @Inject("appTheme") private theme:string
              ) { 
    console.log("home comp created");
    console.log("Theme is ", theme);

    this.likes = this.dataService.getLikes();
  }

  ngOnInit() {
  }

  increment(e: Event) {
    console.log("Click ", e);
    this.dataService.increment();
    this.likes = this.dataService.getLikes();
  }

}
