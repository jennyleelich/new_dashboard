import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private appService: AppService) {
    this.router.events.subscribe(event => {
      // Hanthisdle route change
      this.appService.selectedIndex = 0;
      this.appService.selectedCaseIndex = -1;
  });
   }

  ngOnInit() {
  }

}
