import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ChartModule } from 'primeng/chart';
@Component({
  selector: 'app-spring-dashboard',
  templateUrl: './spring-dashboard.component.html',
  styleUrls: ['./spring-dashboard.component.css']
})
export class SpringDashboardComponent implements OnInit {
options: any;
data: any;
pieData: any;
pieOptions: any;
details: any;
  constructor(private appService: AppService, private router: Router ) {
    this.data = {
      labels: ['High', 'Medium-High', 'Medium-Low', 'Low'],
      datasets: [
        {
          data: [2, 2, 4, 5],
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
        display: false
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
      responsive: false,
      maintainAspectRatio: false,
      animation: false
    };
  }

  ngOnInit() {
    this.appService.getSpringDetail().subscribe(data => {
      this.details = data;
    });
  }
  showDetail() {
    this.appService.showSpringDetails = true;
    this.router.navigate(['/spring/details']);
  }
}
