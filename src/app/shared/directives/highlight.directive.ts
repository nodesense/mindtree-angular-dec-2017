import { Directive,
         OnInit, 
         Input, 
         ElementRef, 
         Renderer,
         HostListener
} from '@angular/core';

@Directive({
  //attribute name, [] is mandatory for name
  selector: '[appHighlight]',
  //get access to directive instance in component
  exportAs: 'appHighlight'
})
export class HighlightDirective implements OnInit {

  @Input("appHighlight")
  color: string;

  //@Input property2

   //dependency injection
  constructor(private hostElement:ElementRef,
             private renderer: Renderer) {
    
    console.log("highlight cons")
   }

   ngOnInit() {
     this.color = this.color || 'lightgreen';

     console.log('directive init', this.color);

     //this.setColor(this.color);
    }

    setColor(color: string) {
      this.renderer.setElementStyle(
        this.hostElement.nativeElement,
        "background",
        color
      );
    }

    @HostListener('mouseenter')
    onMouseEnter() {
      this.setColor(this.color);
    }

    @HostListener('mouseleave')
    onmouseleave() {
      this.setColor('');
    }

    //to be called by component
    sayColor() {
      alert("My color is " + this.color);
    }

}
