import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpringDetailsComponent } from './spring/spring-details/spring-details.component';
import { AccordionModule } from 'primeng/accordion';
/**
 * as springdetailcomponent is shared component, 
 * thus this component belong to shared module, 
 * shared module has the responsibility to include the AccordionModule
 */

@NgModule({
  declarations: [
    SpringDetailsComponent
  ],
  imports: [
    CommonModule,
    AccordionModule
   
   
  ],
  exports: [
    SpringDetailsComponent,
    
    
  ]

})
export class SharedModule { }
