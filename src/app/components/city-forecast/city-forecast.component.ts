import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Subscription } from 'rxjs';
import { ToastrModule, ToastrService } from 'ngx-toastr';


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

  public weatherData = [];

  public loading = true;

  constructor(private weatherService: WeatherService, private toastr: ToastrService) { }


  ngOnInit() {
    /** get Forecast id municipio */
    //24010 (La Bañeza)

    this.getForecastSub = this.weatherService.getDailyForecast('24010')
          .subscribe(res => {
              console.log(res);
              // Response Example
              // {
              //   "descripcion": "exito",
              //   "estado": 200,
              //   "datos": "https://opendata.aemet.es/opendata/sh/56df87ba",
              //   "metadatos": "https://opendata.aemet.es/opendata/sh/dfd88b22"
              // }


              this.getOpenDataSub = this.weatherService.getOpendata(res['datos'])
              .subscribe(resWeather => {
                console.log('Resultados del tiempo:');
                console.log(resWeather);
                this.weatherData.push(resWeather[0]);
                this.loading = false;

                // Response example
                // elaborado: "2019-10-15"
                // id: 24010
                // nombre: "Bañeza, La"
                // origen:
                //   copyright: "© AEMET. Autorizado el uso de la información y su reproducción citando a AEMET como autora de la misma."
                //   enlace: "http://www.aemet.es/es/eltiempo/prediccion/municipios/baneza-la-id24010"
                //   language: "es"
                //   notaLegal: "http://www.aemet.es/es/nota_legal"
                //   productor: "Agencia Estatal de Meteorología - AEMET. Gobierno de España"
                //   web: "http://www.aemet.es"

                // prediccion:
                //   dia: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]

                // provincia: "León"
                // version: 1
              }, errWeather => {
                this.toastr.error('Error getting weather: ', errWeather);
              });
            },  err => {
                this.toastr.error('Error getting weather: ', err);
            }
          );


  }

}
