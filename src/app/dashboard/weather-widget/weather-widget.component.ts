import { Component, OnInit } from '@angular/core';
import { WheatherService } from '../services/wheather.service';
import { Weather } from '../models/weather.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {

  constructor(private wheatherService: WheatherService) { }

  weather$: Observable<Weather> = this.wheatherService.weather$

  ngOnInit(): void { }

}
