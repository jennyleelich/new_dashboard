import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FallComponent } from './fall.component';

const routes: Routes = [{ path: '', component: FallComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FallRoutingModule { }
