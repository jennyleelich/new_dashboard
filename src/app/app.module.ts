import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { SpringModule } from './spring/spring.module';
import { SharedModule } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { DashboardModule } from './dashboard/dashboard.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SummerModule } from './summer/summer.module';
import { FallModule } from './fall/fall.module';
import { WinterModule } from './winter/winter.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DashboardModule,
    SpringModule,
    SummerModule,
    FallModule,
    WinterModule
 
   
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
