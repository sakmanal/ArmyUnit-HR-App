import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { MemberFile } from '../models/memberFile.model';
import { environment } from '@environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { createMemberfile } from '@mock/memberfile'
import { delay, map } from 'rxjs/operators';
import { Day_off, _DayOff } from '@core/models/day_off.model';
import { DayoffService } from '@core/services/dayOff/dayoff.service';

@Injectable({
  providedIn: 'root'
})
export class MemberfileService {

  constructor(private http: HttpClient, private dayoffService: DayoffService) { }

  public getMemmberFile(id: string): Observable<MemberFile>{
    // return this.http.get<MemberFile>(`${environment.apiUrl}/memberfile/${id}`)
    // return throwError("server error");

    return this.dayoffService.getDaysOff().pipe(
      map( (days_off: Day_off[]) => {
         const file = createMemberfile(id);
         const daysOff: Day_off[] = days_off.filter( member => member.staffmember.staff_id == id);
         const _daysOff: _DayOff[]  = daysOff.map(d => {
           return {
             type: d.type,
             start_date: d.start_date,
             end_date: d.end_date,
             destination: d.destination,
             id: d.id
           }
         });

         return {
           ...file,
           days_off: _daysOff
         }
      }),
      delay(1000)
    )
  }
}
