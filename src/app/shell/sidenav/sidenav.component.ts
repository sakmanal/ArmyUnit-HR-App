import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

/*   @Input() set sideBarOpen(value:boolean) {
    this._sideBarOpen = value;
  }
  @Input() set navMode(value:'side' | 'over'){
    this._navMode = value;
  } */

  @Input() sideBarOpen:boolean = true;
  @Input() navMode: 'side' | 'over' = "side";

}
