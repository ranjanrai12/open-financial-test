import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slide-toogle',
  templateUrl: './slide-toogle.component.html',
  styleUrls: ['./slide-toogle.component.scss']
})
export class SlideToogleComponent implements OnInit {
  off = false;
  @Output() toggleEvent= new EventEmitter<boolean>()
  constructor() { }

  ngOnInit() {
  }

  onToggleClick(event) {
    this.off = !this.off;
    this.toggleEvent.emit(!this.off);
  }

}
