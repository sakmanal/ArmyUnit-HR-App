import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ResolvedMemberFile, MemberFile } from './models/memberFile.model';
import { Observable, of } from 'rxjs';
import { MemberfileService } from './services/memberfile.service';
import { NotificationService } from '@core/services/notification/notification.service'
import { map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemberFileResolver implements Resolve<ResolvedMemberFile> {

  constructor(private memberfileService: MemberfileService,
              private router: Router,
              private notificationService: NotificationService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<ResolvedMemberFile> {
    const id = route.paramMap.get('id');
    const param = route.paramMap.get("backurl");
    const backUrl = (param === 'memberFile' || param === 'staff') ? param : 'memberFile';

    if (!id) {
      console.error('no id provided')
      this.router.navigate(['/memberFile']);
      return of(null);
    }
    return this.memberfileService.getMemmberFile(id).pipe(
      map((file: MemberFile) => {
        if (file) {
            return {memeberfile: file, backUrl: backUrl };
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
