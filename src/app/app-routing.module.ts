import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'spring', loadChildren: () => import('./spring/spring.module').then(m => m.SpringModule) },
  { path: 'summer', loadChildren: () => import('./summer/summer.module').then(m => m.SummerModule) },
  { path: 'fall', loadComponent: () => import('./new-fall/new-fall.component').then(mod => mod.NewFallComponent)},
  { path: 'winter', loadComponent: () => import('./new-winter/new-winter.component').then(mod => mod.NewWinterComponent)},
  { path: '***', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
