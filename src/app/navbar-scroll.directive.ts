import { Directive, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNavbarScroll]'
})
export class NavbarScrollDirective {

  constructor(
    private render: Renderer2
  ) { }
  @HostBinding('style.background') shrinkNavbar: string;

  @HostListener('window:scroll', ['$event']) onScroll($event: Event): void{
    if($event) {
      if (window.pageYOffset > 50) {
        this.shrinkNavbar = 'white'
      } else {
        this.shrinkNavbar = 'transparent'
      }
    }
  }
}
