import { Routes, RouterModule } from '@angular/router';
import { SpringComponent } from './spring.component';
import { SpringDashboardComponent } from './spring-dashboard/spring-dashboard.component';
import { SpringDetailsComponent } from './spring-details/spring-details.component';
import { NgModule } from '@angular/core';

const SPRING_ROUTES: Routes = [
  {
    path: 'spring',
    component: SpringComponent,
    children: [
      { path: 'dashboard', component: SpringDashboardComponent},
      { path: 'details', component: SpringDetailsComponent},
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(SPRING_ROUTES)],
  exports: [RouterModule]
})
export class SpringRoutingModule { }

