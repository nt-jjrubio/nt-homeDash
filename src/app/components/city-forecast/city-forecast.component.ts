import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.scss']
})
export class CityForecastComponent implements OnInit {



  /**
  * XHR Subscription
  */
  private getForecastSub: Subscription;


  constructor(private weatherService: WeatherService) { }

  ngOnInit() {

    this.getForecastSub = this.weatherService.getForecast('3119979')
          .subscribe(res => {
              console.log(res);
            },  err => {

            }
          );


  }

}
