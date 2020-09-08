import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

type navMode = 'side' | 'over';

@Injectable({
  providedIn: 'root'
})
export class SidenavControlService {

  private sideBarOpenSubject: BehaviorSubject<boolean>;
  private navModeSubject: BehaviorSubject<navMode>;
  private smallScreenSubject: BehaviorSubject<boolean>;

  public sideBarOpen:Observable<boolean>;
  public navMode:Observable<navMode>;
  public smallscreen:Observable<boolean>;

  constructor() {
    this.sideBarOpenSubject = new BehaviorSubject<boolean>(true);
    this.navModeSubject = new BehaviorSubject<navMode>('side');
    this.smallScreenSubject = new BehaviorSubject<boolean>(true);

    this.sideBarOpen = this.sideBarOpenSubject.asObservable();
    this.navMode = this.navModeSubject.asObservable();
    this.smallscreen = this.smallScreenSubject.asObservable();
  }

  public setSideBarState(state: boolean) {
    this.sideBarOpenSubject.next(state);
  }
  public setNavModeState(state: navMode) {
    this.navModeSubject.next(state);
  }
  public setSmallScreenState(state: boolean) {
    this.smallScreenSubject.next(state);
  }

  public get sideBarState(): boolean{
    return this.sideBarOpenSubject.value;
  }
  public get navModeState(): navMode{
    return this.navModeSubject.value;
  }
  public get smallScreenState(): boolean{
    return this.smallScreenSubject.value;
  }

}
