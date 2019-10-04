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
  private getOpenDataSub: Subscription;


  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    /** get Forecast id municipio */
    //24010 (La Bañeza)
    this.getForecastSub = this.weatherService.getForecast('24010')
          .subscribe(res => {
              console.log(res);

              this.getOpenDataSub = this.weatherService.getOpendata(res['data'])
              .subscribe(res => {
                console.log('Resultados del tiempo');
                console.log(res);
              });

              // Response Example
              // {
              //   "descripcion": "exito",
              //   "estado": 200,
              //   "datos": "https://opendata.aemet.es/opendata/sh/56df87ba",
              //   "metadatos": "https://opendata.aemet.es/opendata/sh/dfd88b22"
              // }


            },  err => {

            }
          );


  }

}
