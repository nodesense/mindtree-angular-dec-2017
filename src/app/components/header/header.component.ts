import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  likes: number;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.likesSubject
    //called when we call .next in the service
    //n => next(1001)
    .subscribe ( n => {
      console.log("SUBS HEADER ", n);
      this.likes = n; 
    })
  }

}
