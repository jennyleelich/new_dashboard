import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-side-second',
  templateUrl: './right-side-second.component.html',
  styleUrls: ['./right-side-second.component.css']
})
export class RightSideSecondComponent implements OnInit {
  num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  constructor() { }

  ngOnInit() {
  }

}
