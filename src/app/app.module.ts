import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { AboutUsComponent } from './dashboard/about-us/about-us.component';
import { FeaturesComponent } from './dashboard/features/features.component';
import { TheMenuComponent } from './dashboard/the-menu/the-menu.component';
import { InsightsComponent } from './dashboard/insights/insights.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    HeaderComponent,
    AboutUsComponent,
    FeaturesComponent,
    TheMenuComponent,
    InsightsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
