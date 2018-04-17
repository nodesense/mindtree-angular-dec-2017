import { Subscription } from 'rxjs/Subscription';
import { Component, 
        OnInit, 
        OnDestroy,
        Inject,
        Injector
      } from '@angular/core';
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
export class HomeComponent implements OnInit, OnDestroy {

  likes: number;

  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);
 
  bsValue: Date = new Date();
  bsRangeValue: any = [new Date(2017, 7, 4), new Date(2017, 7, 20)];


  price: number = 99.99;
  title: string = 'Home';
  today: Date = new Date();

  private dataService: DataService;

  private subscription: Subscription;
  //dependency injection
  //inject service instance
  //@Inject () to inject by value
  constructor(/* private dataService:DataService, */
              private injector: Injector,
              @Inject("appTheme") private theme:string
              ) { 
    console.log("home comp created");
    console.log("Theme is ", theme);


    this.dataService = injector.get(DataService);

    this.likes = this.dataService.getLikes();
     
  }

  ngOnInit() {

   this.subscription =  this.dataService.
        likesSubject
        .subscribe ( n => {
           console.log("HOME SUBS,", n, Math.random());       
         })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  increment(e: any) {
    console.log("Click ", e);
    this.dataService.increment();
    this.likes = this.dataService.getLikes();
  }

}
