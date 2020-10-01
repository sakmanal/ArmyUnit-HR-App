import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreviousCurrentUrlService {

  public currentUrl: string;
  public previousUrl: string;
  constructor() { }

}
