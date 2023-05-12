import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummerComponent } from './summer.component';

const routes: Routes = [{ path: '', component: SummerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummerRoutingModule { }
/**
 * https://angular.io/guide/lazy-loading-ngmodules
 * ng generate module fall --route fall --module app.module
 */