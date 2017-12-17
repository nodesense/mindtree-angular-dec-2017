import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LikeComponent } from './components/like/like.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PowerPipe } from './pipes/power.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
                //Comp1, Comp2..
                LikeComponent, 
                HighlightDirective, 
                PowerPipe],

  //subset of declaration
  exports: [
    LikeComponent, 
    HighlightDirective, 
    PowerPipe
  ]
})
export class SharedModule { }
