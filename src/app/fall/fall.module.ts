import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FallRoutingModule } from './fall-routing.module';
import { FallComponent } from './fall.component';
import { AccordionModule } from 'primeng/accordion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    FallComponent
  ],
  imports: [
    CommonModule,
    FallRoutingModule,
    AccordionModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule
  ]
})
export class FallModule { }
