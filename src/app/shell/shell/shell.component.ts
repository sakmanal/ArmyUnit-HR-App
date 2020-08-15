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

  userInfo: { userAvatar?:string, userFullNameTitle:string} =  {
    userAvatar: '../../../assets/Flag_of_Greece.jpg',
    userFullNameTitle:'Master Sergeant(ENG) Nikalaos Papas'
  }

  viewportMobileQuery: MediaQueryList;

  private _viewportQueryListener: () => void;

  constructor(private changeDetectionRef: ChangeDetectorRef, private media: MediaMatcher) {
    this.viewportMobileQuery = media.matchMedia('(max-width: 700px)');
    this._viewportQueryListener = () => changeDetectionRef.detectChanges();
    this.viewportMobileQuery.addEventListener('change', this._viewportQueryListener);
  }

  ngOnDestroy(): void {
    this.viewportMobileQuery.removeEventListener('change', this._viewportQueryListener);
  }

  sideBarToggler(event?:string) {

    this.sideBarOpen = !this.sideBarOpen;
    console.log(this.sideBarOpen)
  }

}
