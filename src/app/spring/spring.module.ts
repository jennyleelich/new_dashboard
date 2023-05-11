import { NgModule } from '@angular/core';
import { SpringComponent } from './spring.component';
import { SpringTabsComponent } from './spring-tabs/spring-tabs.component';
import { SpringDashboardComponent } from './spring-dashboard/spring-dashboard.component';
import { SpringRoutingModule } from './spring.routes';
import { SharedModule } from '../shared.module';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    TableModule,
    AccordionModule,
    DropdownModule,
    ChartModule,
    SharedModule,
    SpringRoutingModule
  
  ],
  declarations: [
    SpringComponent,
    SpringTabsComponent,
    SpringDashboardComponent
  ],
  providers: [ ]
})
export class SpringModule { }
