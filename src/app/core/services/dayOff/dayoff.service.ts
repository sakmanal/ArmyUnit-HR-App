import { Injectable } from '@angular/core';
import { Day_off } from '../../models/day_off.model';
import { environment } from '@environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { StaffInfoService } from '../staff/staff-info.service';
import { daysOff } from '@mock/dayoff';
import { v4 as uuidv4 } from 'uuid';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DayoffService {

  private daysOffDoc: Day_off[] = [];

  constructor(private http: HttpClient, private staffInfoService: StaffInfoService) { }

  public saveDayOffDocument(doc: Day_off): Observable<{message:string}>{
    /* Http POST request to a real server */
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // return this.http.post<{message:string}>(`${environment.apiUrl}/dayoff/${doc.staffmember.staff_id}`, doc, { headers });

    /* simulate server Error responce */
    // return throwError(`Private Travor has only 3 days of ${doc.type} left`);

    /* simulate server responce */
    if (!this.daysOffDoc.length) {
      this.daysOffDoc = [...daysOff];
    }
    const newDoc = {...doc};
    newDoc.id = uuidv4();
    if (!this.datesOverlap(newDoc)) {
      this.daysOffDoc.push(newDoc);
      return of({message: "request saved successfully!"}).pipe(delay(500));
    }
    return throwError('there is already an arranged day-off during these dates');
  }

  public cancelDayOffDocument(id: string): Observable<{message:string}>{
    /* Http DELETE request to a real server */
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // return this.http.delete<{message:string}>(`${environment.apiUrl}/dayoff/${id}`, { headers });

    /* simulate server responce */
    this.daysOffDoc = [...this.daysOffDoc.filter(doc => doc.id !== id)];
    return of({message: "request canceled successfully!"}).pipe(delay(500));
  }

  public getDaysOff(): Observable<Day_off[]>{
    /* Http GET request to a real server */
    // return this.http.get<Day_off[]>(`${environment.apiUrl}/daysoff`)

    /* simulate server responce */
    if (this.daysOffDoc.length) {
      return of(this.daysOffDoc).pipe(delay(500));
    }
    this.daysOffDoc = [...daysOff];
    return of(this.daysOffDoc).pipe(delay(500));
  }

  public getMemberDaysOff(memberId: string): Observable<Day_off[]> {
    /* Http GET request to a real server */
    // return this.http.get<Day_off[]>(`${environment.apiUrl}/daysoff/${memberId}`)

    /* simulate server responce */
    return this.getDaysOff().pipe(
      map((days_off: Day_off[]) => days_off.filter( doc => doc.staffmember.staff_id === memberId))
    )
  }

  private datesOverlap(doc: Day_off): boolean {
    const start = doc.start_date;
    const end = doc.end_date;
    const memberDocs = this.memberDaysOff(doc.staffmember.staff_id);
    let overlap: boolean = false;
    memberDocs.forEach((doc: Day_off) => {
     const startDayOverlap = moment(doc.start_date).isBetween(moment(start), moment(end), 'days', '[]');
     const endDayOverlap = moment(doc.end_date).isBetween(moment(start), moment(end), 'days', '[]');
     overlap = startDayOverlap || endDayOverlap;
    })
    return overlap;
   }

   private memberDaysOff(memberId: string): Day_off[] {
     return this.daysOffDoc.filter(doc => doc.staffmember.staff_id === memberId);
   }

}
