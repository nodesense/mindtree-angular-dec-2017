import { Component, OnInit, Input,
         Output,
         EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  //property binding
  //take data from parent
  @Input()
  year: number;

  //alias binding name
  @Input("x-company")
  company: string;

  //object example
  @Input()
  address: any;


  //Output should be always event
  //Output/event binding
  @Output()
  contactEvent: EventEmitter<string> = new EventEmitter();

  canHighlight: boolean = false;


  constructor() { }

  ngOnInit() {
    
  }

  handleClick() {
    //trigger/fire custom event 
    this.contactEvent.emit("BLR");
  }

}
