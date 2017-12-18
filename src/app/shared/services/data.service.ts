import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

//1. business logic
//2. communucation logic RESTful api calls
//3. Data sharing across components
//    3.a comp 1 put data in to service
//    3.b comp 2 can fetch data from service
//4. Keeping data for the component
@Injectable()
export class DataService {

  likes: number = 1000;

  //Observable
  likesSubject: Subject<number> = new Subject();


  constructor() { 
    console.log("dataservice created");
  }

  increment() {
    this.likes++;

    //next => Publish 1001, 1002, 1003...
    this.likesSubject.next(this.likes);
  }

  getLikes() {
    return this.likes;
  }

}
