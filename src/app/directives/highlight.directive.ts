import { Directive, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector : '[apphighlight]'
})
export class HighlightDirective{

    @Input('myColor') myColor : string;
    @HostBinding('style.backgroundColor') bgColor : string;

    @HostListener('mouseleave') 
    mouseleave(eventdata){
        //alert('Mouse Entered!');
        this.bgColor = "transparent";
    }
    @HostListener('mouseenter') 
    mouseenter(eventdata){
        //alert('Mouse Entered!');
        this.bgColor = this.myColor;   
    }
    constructor(private elementRef : ElementRef){
        //console.log(this.myColor);      //?
        //console.log(this.elementRef.nativeElement);
        //this.elementRef.nativeElement.style.backgroundColor = "aqua";
    }
}