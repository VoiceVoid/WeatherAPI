import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class WeatherService {
  apiKey = 'f591a0617876bc5bd4ff6c6223e0d27e';
  url = 'http://api.openweathermap.org/data/2.5/weather?q=';
  constructor(private http: Http) { }

  getWeather(city, code) {
    return this.http.get(this.url + city + ',' + code + '&units=metric&APPID=' + this.apiKey).map((res) =>
      res.json());
  }
}

