import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../../app.service';
@Component({
  selector: 'app-spring-tabs',
  templateUrl: './spring-tabs.component.html',
  styleUrls: ['./spring-tabs.component.css']
})
export class SpringTabsComponent implements OnInit {

  constructor(private router: Router, public appService: AppService) { }

  ngOnInit() {
  }

}
