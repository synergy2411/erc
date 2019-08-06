import { Directive, ElementRef, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() myColor : any;
  @HostBinding("style.background-color") bgColor : any;

  @HostListener('mouseenter') mouseenter(){
    this.bgColor = this.myColor;
  }

  @HostListener('mouseleave') mouseleave(){
    this.bgColor = 'transparent';
  }

  constructor(private elementRef : ElementRef) {
    // console.log(this.bgColor);    //?
    // console.log("Color : ", this.myColor);
    // this.bgColor = "green";
    // console.log(this.elementRef.nativeElement);
    // this.elementRef.nativeElement.style.backgroundColor = "lightgrey";
  }

}
