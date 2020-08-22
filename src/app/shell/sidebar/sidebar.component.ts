import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../auth/services/authentication.service';
import { Router } from '@angular/router';
import { UserInfoService } from '../../shared/services/user-info.service';

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
    private userInfoService: UserInfoService
    ) { }

  ngOnInit(): void {
    this.userInfo = this.userInfoService.TakeUserInfo();
  }

  public logOut(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
