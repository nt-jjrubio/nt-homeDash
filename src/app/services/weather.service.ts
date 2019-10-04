import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { apikeys } from '../apikeys/apikeys';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  public getForecast(municipio: string): Observable<Object> {

    return this.http.get(environment.weather.dialyForecast + municipio, {
      headers: {
        Accept: 'application/json',
        api_key: apikeys.aemetAPIKey,
      }
    });
  }

  public getOpendata(url: string): Observable<Object> {
    return this.http.get(url);
  }
}
