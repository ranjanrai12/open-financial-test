import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('topNavbar') topNavbar: ElementRef;

  constructor(
    private render: Renderer2
  ) { }

  ngOnInit() {
  }

}
