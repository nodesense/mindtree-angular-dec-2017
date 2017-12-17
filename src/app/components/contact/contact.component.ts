import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  //# reference variable
  //.? elvis operator null check
  // [()] two way binding

  address: any = undefined; //null

  constructor() { }

  ngOnInit() {
     setTimeout ( () => {
       this.address = {
         city: 'BLR'
       }
     }, 2000);
  }

}
