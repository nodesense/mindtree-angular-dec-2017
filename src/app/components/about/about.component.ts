import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  //ngFor and ngIf, else

  members: string[] = ['Venkat'
                        , 'Nila'
                      ];
  //ngIf
  showMembers: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  addMember() {
    this.members.push("Member");
  }

  empty() {
    this.members = [];
  }

  toggle() {
    this.showMembers = !this.showMembers;
  }

}
