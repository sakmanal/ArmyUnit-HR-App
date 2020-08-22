import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnDestroy {

  sideBarOpen:boolean = true;
  navMode: 'side' | 'over' = "side";

  smallerScreen:boolean = false;

  viewportMobileQuery: MediaQueryList;

  private _viewportQueryListener: () => void;

  constructor(private changeDetectionRef: ChangeDetectorRef, private media: MediaMatcher) {
    this.viewportMobileQuery = media.matchMedia('(max-width: 700px)');
    this._viewportQueryListener = () =>{
      changeDetectionRef.detectChanges();
      this.sideNavState();
    }
    this.viewportMobileQuery.addEventListener('change', this._viewportQueryListener);
  }

  ngOnDestroy(): void {
    this.viewportMobileQuery.removeEventListener('change', this._viewportQueryListener);
  }

  public sideBarToggler(event?:string):void {
    this.sideBarOpen = !this.sideBarOpen;
  }

  private sideNavState():void{
       if (this.viewportMobileQuery.matches){
            this.sideBarOpen = false;
            this.navMode = 'over';
            this.smallerScreen = true;
       }else{
            this.sideBarOpen = true;
            this.navMode = 'side';
            this.smallerScreen = false;
       }
  }

}
