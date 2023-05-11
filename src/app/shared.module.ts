import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpringDetailsComponent } from './spring/spring-details/spring-details.component';

import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    SpringDetailsComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    TableModule,
    AccordionModule,
    DropdownModule,
    ChartModule,
   
  ],
  exports: [
    SpringDetailsComponent
  ]

})
export class SharedModule { }
