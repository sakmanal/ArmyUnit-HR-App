import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  currentUser: User;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(user => this.currentUser = user);
   }

  public TakeUserInfo(): { userAvatar:string, userFullNameTitle:string}{
    return {
      userAvatar: this.getUserAvatar(this.currentUser),
      userFullNameTitle: this.getFullNameTitle(this.currentUser)
    }
  }

 private getFullNameTitle(user:User): string{
      return `${user.rank} ${user.firstName} ${user.lastName}` || '';
 }

 private getUserAvatar(user:User){
   return user.foto || '../../../assets/images/Useravatar.jpg';
 }
}
