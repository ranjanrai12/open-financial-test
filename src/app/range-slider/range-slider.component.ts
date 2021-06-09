import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss']
})
export class RangeSliderComponent implements OnInit {
  @ViewChild('slider') slider: ElementRef;
  rangeSilderValue = 15000;

  @Input () min = 100000;
  @Input () max = 300000;
  @Input () initialValue: number;
  @Input () sliderLabel: string = 'range slider';


  constructor() { }

  ngOnInit() {
    if (!this.initialValue) {
      this.rangeSilderValue = this.min;
    } else {
      this.rangeSilderValue = this.initialValue;
    }
  }

  sliderChange(event) {
    this.rangeSilderValue = +event.target.value
    
  }
}
