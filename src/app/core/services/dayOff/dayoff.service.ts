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

  public getDaysOff(): Observable<Day_off[]>{
    // return this.http.get<Day_off[]>(`${environment.apiUrl}/daysoff`)

    // return new Observable(observer => {
    //   setTimeout(() => {
    //      observer.next([...daysOff])
    //   }, 500);
    // })

    return of([...daysOff]).pipe(delay(500));
  }

}
