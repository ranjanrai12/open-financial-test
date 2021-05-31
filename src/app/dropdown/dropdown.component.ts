import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  shouldShowItem = false;
  options = [6, 10, 15]
  selectedValue = 6;
  constructor() { }

  ngOnInit() {
  }

}
