import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit {
  existingLoan = true;
  loanAmount = 15000;
  constructor() { }

  ngOnInit() {
  }
  onAmountChange(event) {
    this.loanAmount = +event;
  }
}
