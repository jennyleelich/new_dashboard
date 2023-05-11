import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-side-first',
  templateUrl: './right-side-first.component.html',
  styleUrls: ['./right-side-first.component.css']
})
export class RightSideFirstComponent implements OnInit {
  num = [1, 2, 3, 4, 5 ];
  constructor() { }

  ngOnInit() {
  }

}
