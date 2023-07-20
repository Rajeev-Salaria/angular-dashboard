import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {
@Input() appTest:string = "";
  // constructor(private el:ElementRef) {
  //   // this.el.nativeElement.style.color= "blue"
  //  }

  @HostBinding ('style.color') color:string='green';

  @HostListener('click') click(){
   this.color = 'brown'
  }


  ngOnInit(){
    console.log('init')   
  }

  @HostListener("mouseenter") onMouseEnter(){
    this.hightlight(this.appTest)
  }

  private hightlight(color:string){
   this.color = 'blue'
  }
}
