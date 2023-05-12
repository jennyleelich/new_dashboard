import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummerComponent } from './summer.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { RightSideFirstComponent } from './right-side-first/right-side-first.component';
import { RightSideSecondComponent } from './right-side-second/right-side-second.component';
import { SummerRoutingModule } from './summer.routes';
@NgModule({
  imports: [
    CommonModule,
    SummerRoutingModule
  ],
  declarations: [
    SummerComponent,
    LeftSideComponent,
    RightSideFirstComponent,
    RightSideSecondComponent,
  
  ],
  providers: [ ]
})
export class SummerModule { }
