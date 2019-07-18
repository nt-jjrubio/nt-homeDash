import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainClockComponent } from './components/main-clock/main-clock.component';
import { RoomTempComponent } from './components/room-temp/room-temp.component';
import { CityTempComponent } from './components/city-temp/city-temp.component';
import { LeftMainDashComponent } from './left-main-dash/left-main-dash.component';
import { IndexDashboardComponent } from './index-dashboard/index-dashboard.component';
import { CityForecastComponent } from './components/city-forecast/city-forecast.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainClockComponent,
    RoomTempComponent,
    CityTempComponent,
    LeftMainDashComponent,
    IndexDashboardComponent,
    CityForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
