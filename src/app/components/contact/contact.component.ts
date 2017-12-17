import { Component, OnInit, 
          ViewChild,
          ElementRef
        } from '@angular/core';
 
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


  @ViewChild("inp1")
  inputElement: ElementRef;

  @ViewChild("p1")
  paraElement: ElementRef;

  //view is not ready
  constructor() { 

  }

  //called after view init
  ngOnInit() {
     setTimeout ( () => {
       this.address = {
         city: 'BLR'
       }
     }, 2000);

     //nativeElement is DOM Element
     this.inputElement.nativeElement.focus();
     this.inputElement
          .nativeElement.value = "Your name";

  }

}
