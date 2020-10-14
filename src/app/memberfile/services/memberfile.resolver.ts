import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { MemberFile } from '../models/memberFile.model';
import { Observable, of } from 'rxjs';
import { MemberfileService } from './memberfile.service';
import { NotificationService } from '@core/services/notification/notification.service'
import { map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemberFileResolver implements Resolve<MemberFile> {

  constructor(private memberfileService: MemberfileService,
              private router: Router,
              private notificationService: NotificationService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<MemberFile> {
    const id = route.paramMap.get('id');
    if (!id) {
      console.error('no id provided')
      this.router.navigate(['/memberFile']);
      return of(null);
    }

    return this.memberfileService.getMemmberFile(id).pipe(
      map((file: MemberFile) => {
        if (file) {
            return file;
        }
        this.notificationService.showError(`member file with id: ${id} was not found`)
        this.router.navigate(['/memberFile']);
        return of(null);
      }),
      catchError(error => {
          this.notificationService.showError(`Retrieval error: ${error}`)
          this.router.navigate(['/memberFile']);
          return of(null);
      })
    )

  }

}
