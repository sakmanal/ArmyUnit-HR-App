import { Component } from '@angular/core';
import { SidenavControlService } from '../services/sidenav-control.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  sideBarOpen:boolean ;
  navMode: 'side' | 'over';

  constructor(private sidenavControlService: SidenavControlService) {
    this.sidenavControlService.sideBarOpen.subscribe(state => this.sideBarOpen = state);
    this.sidenavControlService.navMode.subscribe(state => this.navMode = state);
  }

}
