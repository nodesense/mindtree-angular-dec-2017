import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LikeComponent } from './components/like/like.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PowerPipe } from './pipes/power.pipe';
import { DataService } from './services/data.service';

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
  ],

  //services classes
  //values, object
  //no need to export it
  providers: [
    //shared, singleton instance
    //ClassType, Angular create instance
    
    //DataService,

    {
      provide: DataService, //interface/base
      useClass: DataService //create instance
    },
 
    {
      //pass the value, no need to create instance
      provide: 'appTheme',
      useValue: 'Blue'
    }
  ]
})
export class SharedModule { }
