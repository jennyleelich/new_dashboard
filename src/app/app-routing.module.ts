import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SummerComponent } from './summer/summer.component';
import { SpringComponent } from './spring/spring.component';
import { WinterComponent } from './winter/winter.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
 { path: 'spring', loadChildren: () => import('./spring/spring.module').then(m => m.SpringModule)},
  // { path: 'summer', loadChildren: 'app/summer/summer.module#SummerModule'},
  // { path: 'fall', loadChildren: 'app/fall/fall.module#FallModule'},
  // { path: 'winter', loadChildren: 'app/winter/winter.module#WinterModule'},
  // { path: 'spring', component: SpringComponent },
   { path: 'summer', component: SummerComponent },
  // { path: 'fall', component: FallComponent },
   { path: 'winter', component: WinterComponent },
  // { path: 'dashboard', component: DashboardComponent },
  { path: '***', redirectTo: '', pathMatch: 'full'},
  { path: 'fall', loadChildren: () => import('./fall/fall.module').then(m => m.FallModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
