import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@auth/services/authentication.service';
import { Router } from '@angular/router';
import { UserInfoService } from '@auth/services/user-info.service';
import { SidenavControlService } from '../services/sidenav-control.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string = '744 Engineer Company';
  userInfo: { userAvatar:string, userFullNameTitle:string} =  {
    userAvatar: '',
    userFullNameTitle:''
  }
  smallerScreen:boolean;

  constructor(
         private authenticationService: AuthenticationService,
         private router: Router,
         private userInfoService: UserInfoService,
         private sidenavControlService: SidenavControlService
         ) {
            this.sidenavControlService.smallscreen.subscribe(state => this.smallerScreen = state)
          }

  ngOnInit(): void {
      this.userInfo = this.userInfoService.TakeUserInfo();
  }


  public toggleSideBar() {
    const sideBarState = this.sidenavControlService.sideBarState;
    this.sidenavControlService.setSideBarState(!sideBarState)
  }

  public logOut(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
