import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WinterComponent } from './winter/winter.component';


const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'spring', loadChildren: () => import('./spring/spring.module').then(m => m.SpringModule) },
  { path: 'fall', loadChildren: () => import('./fall/fall.module').then(m => m.FallModule) },
  { path: 'summer', loadChildren: () => import('./summer/summer.module').then(m => m.SummerModule) },
  { path: 'winter', component: WinterComponent },
  { path: '***', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
