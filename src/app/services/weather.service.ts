import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  public getForecast(cityID: string): Observable<object> {

    return this.http.get(environment.weather.forecast, {
      params: {
        appid: environment.openweatherAPIKey,
        id: cityID
      }
    });
  }
}
