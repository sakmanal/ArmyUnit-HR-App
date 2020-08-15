import { Component, OnDestroy, Input } from '@angular/core';

import { MediaObserver , MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnDestroy {

  sideBarOpen:boolean = true;
  navMode: 'side' | 'over' = "side";
  watcher: Subscription;
  smallerScreen:boolean = false;

  userInfo: { userAvatar?:string, userFullNameTitle:string} =  {
    userAvatar: '../../../assets/Flag_of_Greece.jpg',
    userFullNameTitle:'Master Sergeant(ENG) Nikalaos Papas'
  }

  constructor(public mediaObserver: MediaObserver) {

    this.watcher = mediaObserver.media$.subscribe((change: MediaChange) => {

      if ( change.mqAlias == 'sm' || change.mqAlias == 'xs') {
         this.sideBarOpen = false
         this.navMode = 'over'
      }else{
        this.sideBarOpen = true
        this.navMode = "side";
      }
    });
  }

  ngOnDestroy(): void {
    this.watcher.unsubscribe();
  }

  sideBarToggler(event?:string) {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
