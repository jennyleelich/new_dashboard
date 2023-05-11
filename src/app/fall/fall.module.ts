import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FallComponent } from './fall.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule
  ],
  declarations: [
    FallComponent
  ],
  providers: [ ]
})
export class FallModule { }
