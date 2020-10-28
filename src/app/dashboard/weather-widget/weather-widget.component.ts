import { Component, OnInit } from '@angular/core';
import { WheatherService } from '../services/wheather.service';
import { Weather } from '../models/weather.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {

  constructor(private wheatherService: WheatherService) { }

  weather$: Observable<Weather> = this.wheatherService.weather$
  // .pipe(
  //   tap(data => console.log(data))
  // );

  ngOnInit(): void { }

}
