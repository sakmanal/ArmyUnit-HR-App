import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreviousCurrentUrlService {

  private currentUrl: string;
  private previousUrl: string = 'memberFile';
  constructor() { }

  public get preUrl(): string {
    // prevent navigate again to edit page with back-button
    if (this.previousUrl.endsWith('/edit')) {
      return 'memberFile';
    }
    return this. previousUrl;
  }

  public set preUrl(url: string){
    this.previousUrl = url;
  }

  public get currUrl(): string{
    return this.currentUrl;
  }

  public set currUrl(url: string){
    this.currentUrl = url;
  }

}
