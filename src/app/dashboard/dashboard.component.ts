import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SpringDetailsComponent } from '../spring/spring-details/spring-details.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
options: any;
data: any;
pieData: any;
pieOptions: any;
details: any;
  constructor(public appService: AppService, private router: Router ) {
  }
  ngOnInit() {
    this.appService.getSpringDetail().subscribe(data => {
      this.details = data;
    });
    this.data = {
      labels: ['High', 'Medium-High', 'Medium-Low', 'Low'],
      datasets: [
        {
          data: [10, 7, 20, 25],
          backgroundColor: [
            '#e54343',
            '#ED8B00',
            '#ffcc00',
            '#84BD00'
          ],
          borderColor: '#1E88E5'
        }
      ]
    };
    this.options = {
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            stepSize: 2,
            beginAtZero: true,
          },
          barPercentage: 0.3
        }],
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            stepSize: 2,
            beginAtZero: true,
          },
          barPercentage: 0.5
        }],
      },
      legend: {
        display: true
      },
      responsive: false,
      maintainAspectRatio: true
    };

    
    
    this.pieData = {
      labels: ['Boy', 'Girl', 'Family', 'Other'],
      datasets: [
        {
          data: [25, 25, 25, 25],
          backgroundColor: [
            'RGB(50, 102, 204)',
            'RGB(254, 153, 0)',
            'RGB( 220, 56, 19)',
            'gray'
          ],
          hoverBackgroundColor: [
            'RGB(50,102,204)',
            'RGB(254,153,0)',
            'RGB(220,56,18)',
            'gray'
          ]
        }
      ]
    };
    this.pieOptions = {
      legend: {
        display: true,
        position: 'right',
        labels: {
          usePointStyle: true
        }
      },
      tooltips: {
        enabled: true
      },
      responsive: true,
      maintainAspectRatio: false,
      animation: false
    };
  }
  showDetail() {
  }
}
