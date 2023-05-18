# Angular 16 Standalone Component, Nested routing(including Lazy load modules and Lazy load standalone components) and Nested Form build Demo 
# visit website: https://dq5xwix87sylo.cloudfront.net


(1) App structure.

    app(folder)--|-app.module.ts
                 |-app.component.html
                 |-app.service.ts ---------------------app provider 
                 |-app.routing.ts----------------------app routing configuration 
                 |-shared.module.ts--------------------shared common component , in this app spring-detail component is common component .
                  \-header component -------------     Includes application navigation bar.
                  \-dashboard module -------------     Includes click table Id could open multiple tab structure 
                       |-dashboard.routes.ts ---- --------Includes children route
                  \-spring module ----------------     Includes open new tab structure,only open two tabs 
                       \-spring-dashboard component 
                       \-spring-details component ---- Includes click dashboard link open new tab show detail information 
                       \-spring-tab component -------- Includes open new tab structure,only open two tabs 
                       |-spring component
                       |-spring.routes.ts ---- --------Includes children route
                  \-fall standalone componnet ------   Includes create nested form structure and how to populate form data
                  \-summer module -------------------- Includes communicating between components different methods demo
                        \-left-side component ---------Includes right side switch menu
                        \-right-side-first component --Includes first right side component
                        \-right-side-second component--Includes second right side component
                        |-summer component ------- ----Includes container of the sub components
                  \-winter standalone component  ------Includes about page.
             
   *. in AppModule don't import Lazy load module or Lazy load standalone component, very important!!
   
(2) About the Router structure of dashboard application.
   
    a) const APP_ROUTES: Routes = [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
        { path: 'spring', loadChildren: () => import('./spring/spring.module').then(m => m.SpringModule) },
        { path: 'summer', loadChildren: () => import('./summer/summer.module').then(m => m.SummerModule) },
        { path: 'fall', loadComponent: () => import('./new-fall/new-fall.component').then(mod => mod.NewFallComponent)},
        { path: 'winter', loadComponent: () => import('./new-winter/new-winter.component').then(mod => mod.NewWinterComponent)},
        { path: '***', redirectTo: '', pathMatch: 'full' },
        ];
    
    b) const SPRING_ROUTES: Routes = [
        { path: '',
          component: SpringComponent,
          children: [
          { path: 'dashboard', component: SpringDashboardComponent},
          { path: 'details', component: SpringDetailsComponent},
          { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
        ] ;}]
            
        in the spring.component.html, make sure include  <router-outlet></router-outlet>

