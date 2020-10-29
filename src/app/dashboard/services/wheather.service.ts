import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weatherdata.model';
import { Weather } from '../models/weather.model';
import { map, shareReplay } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class WheatherService {

  constructor(private http: HttpClient) { }

  weather$: Observable<Weather> = this.http.get<WeatherData>(environment.weatherApiUrl).pipe(
    map( data => {
      const sunsetTime = moment(data.sys.sunset * 1000);
      const currentDate = moment();
      const isDay = currentDate.isBefore(sunsetTime);
      // console.log(isDay)
      return {
       isDay: isDay,
       temp_celcius: Math.round(data.main.temp),
       temp_min: Math.round(data.main.temp_min),
       temp_max: Math.round(data.main.temp_max),
       temp_feels_like: Math.round(data.main.feels_like),
       name: data.name,
       humidity: data.main.humidity,
       description: data.weather[0].description,
       icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
      }
    }),
    shareReplay({ bufferSize: 1, refCount: true })
  )

}
