import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { SidenavControlService } from '../services/sidenav-control.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnDestroy {

  viewportMobileQuery: MediaQueryList;
  private _viewportQueryListener: () => void;

  constructor(private changeDetectionRef: ChangeDetectorRef,
              private media: MediaMatcher,
              private sidenavControlService: SidenavControlService) {
    this.viewportMobileQuery = media.matchMedia('(max-width: 800px)');
    this.sideNavState();
    this._viewportQueryListener = () =>{
      changeDetectionRef.detectChanges();
      this.sideNavState();
    }
    this.viewportMobileQuery.addEventListener('change', this._viewportQueryListener);
  }

  ngOnDestroy(): void {
    this.viewportMobileQuery.removeEventListener('change', this._viewportQueryListener);
  }

  private sideNavState():void{
       if (this.viewportMobileQuery.matches){
            this.sidenavControlService.setSideBarState(false);
            this.sidenavControlService.setNavModeState('over');
            this.sidenavControlService.setSmallScreenState(true);
       }else{
            this.sidenavControlService.setSideBarState(true);
            this.sidenavControlService.setNavModeState('side');
            this.sidenavControlService.setSmallScreenState(false);
       }
  }

}
