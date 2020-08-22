import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AuthenticationService } from '../../auth/services/authentication.service';
import { Router } from '@angular/router';
import { UserInfoService } from '../../shared/services/user-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<string> = new EventEmitter();
  title:string = '744 Engineer Company';
  userInfo: { userAvatar:string, userFullNameTitle:string} =  {
    userAvatar: '',
    userFullNameTitle:''
  }
  @Input() smallerScreen:boolean = false;

  constructor(
         private authenticationService: AuthenticationService,
         private router: Router,
         private userInfoService: UserInfoService
         ) { }

  ngOnInit(): void {
      this.userInfo = this.userInfoService.TakeUserInfo();
  }


  public toggleSideBar() {
    this.toggleSideBarForMe.emit("toogle-sideBar");
  }

  public logOut(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
