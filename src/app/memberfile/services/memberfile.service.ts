import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { MemberFile } from '../models/memberFile.model';
import { environment } from '@environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { createMemberfile } from '@mock/memberfile'
import { delay, map } from 'rxjs/operators';
import { Day_off, _DayOff } from '@core/models/day_off.model';
import { DayoffService } from '@core/services/dayOff/dayoff.service';
import { StaffInfoService } from '@core/services/staff/staff-info.service';

@Injectable({
  providedIn: 'root'
})
export class MemberfileService {

  constructor(private http: HttpClient,
              private staffInfoService: StaffInfoService,
              private dayoffService: DayoffService) { }

  public getMemmberFile(id: string): Observable<MemberFile>{

    if (id === '0'){
      return of({
        member: this.staffInfoService.getEmptyStaff(),
        days_off: [],
        personal_info: null,
        shots:[],
        training: [],
        penalties: [],
        medical_info: null
      })
  }

    // return this.http.get<MemberFile>(`${environment.apiUrl}/memberfile/${id}`)
    // return throwError("server error");

    return this.dayoffService.getDaysOff().pipe(
      map( (days_off: Day_off[]) => {
         const file = createMemberfile(id);
         if (!file){
           return null
         }
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

  public saveMemberFile(file: MemberFile){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (file.member.id === '0'){
      return this.addMemberFile(file, headers);
    }
    return this.updateMemberFile(file, headers);
  }

  private updateMemberFile(file: MemberFile, headers: HttpHeaders): Observable<MemberFile>{
    // return this.http.put<MemberFile>(`${environment.apiUrl}/memberfile/${file.member.id}`, file, { headers });

    return of({...file}).pipe(delay(1000));
  }

  private addMemberFile(file: MemberFile, headers: HttpHeaders): Observable<MemberFile>{
    //  file.member.id = null;
    //  return this.http.post<MemberFile>(`${environment.apiUrl}/memberfile`, file, { headers });

    file.member.id = 'custom-id-ajshfkdjshg';
    return of({...file}).pipe(delay(1000));

  }
}
