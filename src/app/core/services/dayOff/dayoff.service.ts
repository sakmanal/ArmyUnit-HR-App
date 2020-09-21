import { Injectable } from '@angular/core';
import { Staff } from '../../models/staff.model';
import { Day_off } from '../../models/day_off.model';
import { environment } from '@environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { combineLatest, Observable, of, throwError } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { StaffInfoService } from '../staff/staff-info.service';
import { Staffbasic } from '../../models/staff.model';
import { daysOff } from '../../../mock-data/dayoff';
import { DailyRoster } from '../../../roster/models/dailyRoster.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DayoffService {

  constructor(private http: HttpClient, private staffInfoService: StaffInfoService) { }

  public getAllStaffnames(): Observable<Staffbasic[]>{
    return this.staffInfoService.getAllStaff().pipe(
      map((staff: Staff[]) => staff.map(member => {
        return  {
          id: member.id,
          firstName: member.firstName,
          lastName: member.lastName,
          rank: member.rank,
          fullnameTitle: `${member.rank} - ${member.lastName} ${member.firstName}`,
          foto: member.foto
        }
      }))
    )
  }

  public saveDayOffDocument(doc: Day_off): Observable<{message:string}>{
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // return this.http.post<{message:string}>(`${environment.apiUrl}/dayoff/${doc.staffmember.staff_id}`, doc, { headers });

    // return throwError(`Private Travor has only 3 days of ${doc.type} left`);

    return new Observable(observer => {
      setTimeout(() => {
        observer.next({message: "request saved successfully!"})
      }, 500);
    })

  }

  public cancelDayOffDocument(id: string): Observable<{message:string}>{
      // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      // return this.http.delete<{message:string}>(`${environment.apiUrl}/dayoff/${id}`, { headers });

      return new Observable(observer => {
        setTimeout(() => {
          observer.next({message: "request canceled successfully!"})
        }, 500);
      })
  }

  private getDaysOff(): Observable<Day_off[]>{
    // return this.http.get<Day_off[]>(`${environment.apiUrl}/daysoff`)

    // return new Observable(observer => {
    //   setTimeout(() => {
    //      observer.next([...daysOff])
    //   }, 500);
    // })

    return of([...daysOff]).pipe(delay(500));
  }

  private IsBetween(start: Date, end: Date, current: Date): boolean{
    return moment(current).isBetween(moment(start), moment(end), 'days', '[]')
  }

  public getDailyRoster(date: Date): Observable<DailyRoster[]>{
     const daysOff$ =  this.getDaysOff()
     .pipe(
        // tap(() => console.log('daysoff retrieved')),
        map( daysOff =>
          daysOff.filter( (dayOff: Day_off) =>
              this.IsBetween(dayOff.start_date, dayOff.end_date, date)
              )
          )
      );

      const staffmembers$ = this.getAllStaffnames()
            // .pipe(tap(() => console.log('Staffnames retrieved')));

      return combineLatest( [daysOff$, staffmembers$] )
      .pipe(
        map( ([daysOff, staffmembers]) =>
            staffmembers.map((member: Staffbasic) => {
                const dayoff = daysOff.find(dayoff => dayoff.staffmember.staff_id == member.id);
                const isPresent = !dayoff;
                return {
                  rank: member.rank,
                  fullname: `${member.lastName} ${member.firstName}`,
                  state: isPresent? 'Present' : `day-off until ${moment(dayoff.end_date).format('DD/MM/YYYY')}`
                }
            })
          )
      )

  }

}
