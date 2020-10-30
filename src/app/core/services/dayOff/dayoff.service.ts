import { Injectable } from '@angular/core';
import { Day_off } from '../../models/day_off.model';
import { environment } from '@environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { StaffInfoService } from '../staff/staff-info.service';
import { daysOff } from '@mock/dayoff';

@Injectable({
  providedIn: 'root'
})
export class DayoffService {

  constructor(private http: HttpClient, private staffInfoService: StaffInfoService) { }

  public saveDayOffDocument(doc: Day_off): Observable<{message:string}>{
    /* Http POST request to a real server */
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // return this.http.post<{message:string}>(`${environment.apiUrl}/dayoff/${doc.staffmember.staff_id}`, doc, { headers });

    /* simulate server Error responce */
    // return throwError(`Private Travor has only 3 days of ${doc.type} left`);

    /* simulate server responce */
    return of({message: "request saved successfully!"}).pipe(delay(500));
  }

  public cancelDayOffDocument(id: string): Observable<{message:string}>{
    /* Http DELETE request to a real server */
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // return this.http.delete<{message:string}>(`${environment.apiUrl}/dayoff/${id}`, { headers });

    /* simulate server responce */
    return of({message: "request canceled successfully!"}).pipe(delay(500));
  }

  public getDaysOff(): Observable<Day_off[]>{
    /* Http GET request to a real server */
    // return this.http.get<Day_off[]>(`${environment.apiUrl}/daysoff`)

    /* simulate server responce */
    return of([...daysOff]).pipe(delay(500));
  }

}
