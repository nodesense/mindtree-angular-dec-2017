import { Component, 
         OnInit,
         Input,
         Output, 
         EventEmitter

      } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  //[()] input + output

  @Input()
  likes: number;

  //output should be input name + "Change"
  @Output()
  likesChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.likesChange.emit(this.likes + 1);
  }

}
