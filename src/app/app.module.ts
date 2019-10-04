/**
 * Angular
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

/**
 * Packages
 */
import {fas} from '@fortawesome/free-solid-svg-icons'; // Icon pack for font-awesome
import {far} from '@fortawesome/free-regular-svg-icons'; // Icon pack for font-awesome
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
/**
 * Components
 */
import { MainClockComponent } from './components/main-clock/main-clock.component';
import { RoomTempComponent } from './components/room-temp/room-temp.component';
import { CityTempComponent } from './components/city-temp/city-temp.component';
import { LeftMainDashComponent } from './left-main-dash/left-main-dash.component';
import { IndexDashboardComponent } from './index-dashboard/index-dashboard.component';
import { CityForecastComponent } from './components/city-forecast/city-forecast.component';
import { DockComponent } from './components/dock/dock.component';



@NgModule({
  declarations: [
    AppComponent,
    MainClockComponent,
    RoomTempComponent,
    CityTempComponent,
    LeftMainDashComponent,
    IndexDashboardComponent,
    CityForecastComponent,
    DockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(library: FaIconLibrary) {
    // Font Awesome Load
    library.addIconPacks(fas);
    library.addIconPacks(far);
  }
}
