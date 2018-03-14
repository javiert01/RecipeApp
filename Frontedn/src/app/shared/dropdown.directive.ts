import { Directive, HostBinding, Input, OnInit, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{

  @HostBinding('class.open') openDropdown: boolean;
  constructor(private elRef:ElementRef) { }

  ngOnInit(){
    this.openDropdown = false;
  }

  @HostListener('click') toggleOpen(eventData:Event){
    this.openDropdown = !this.openDropdown;
  }



}
