import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-summer',
  templateUrl: './summer.component.html',
  styleUrls: ['./summer.component.css']
})
export class SummerComponent implements OnInit {
  sideBarNum = 'first';
  constructor(public appService: AppService) { }

  ngOnInit() {
  }
  
}
