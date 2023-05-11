import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FallRoutingModule } from './fall-routing.module';
import { FallComponent } from './fall.component';


@NgModule({
  declarations: [
    FallComponent
  ],
  imports: [
    CommonModule,
    FallRoutingModule
  ]
})
export class FallModule { }
