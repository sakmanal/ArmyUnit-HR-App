import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@auth/services/authentication.service';
import { Router } from '@angular/router';
import { UserInfoService } from '@auth/services/user-info.service';
import { SidenavControlService } from '../services/sidenav-control.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  userInfo: { userAvatar:string, userFullNameTitle:string} =  {
    userAvatar: '',
    userFullNameTitle:''
  }

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private userInfoService: UserInfoService,
    private sidenavControlService: SidenavControlService
    ) { }

  ngOnInit(): void {
    this.userInfo = this.userInfoService.TakeUserInfo();
  }

  public logOut(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  closeSidebarOnSmallerScreens(){
    if (this.sidenavControlService.smallScreenState){
      this.sidenavControlService.setSideBarState(false)
    }

  }

}
