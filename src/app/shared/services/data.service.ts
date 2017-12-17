import { Injectable } from '@angular/core';

//1. business logic
//2. communucation logic RESTful api calls
//3. Data sharing across components
//    3.a comp 1 put data in to service
//    3.b comp 2 can fetch data from service
//4. Keeping data for the component
@Injectable()
export class DataService {

  likes: number = 1000;

  constructor() { 
    console.log("dataservice created");
  }

  increment() {
    this.likes++;
  }

  getLikes() {
    return this.likes;
  }

}
