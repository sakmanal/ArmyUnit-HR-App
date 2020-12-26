import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authenticationService: AuthenticationService) { }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

      const currentUser = this.authenticationService.currentUserValue;
      if (currentUser && currentUser.role == 'admin') {
          // logged in so return true
          return true;
      }

      // not logged in so redirect to login page
      this.router.navigate(['/login']);
      return false
  }

}
