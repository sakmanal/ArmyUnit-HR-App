import { Injectable } from '@angular/core';
import { Staff } from '../../shared/models/staff.model';
import { Day_off } from '../../shared/models/day_off.model';
import { environment } from '@environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { StaffInfoService } from '../../shared/services/staff-info.service';
import { staffnames } from '../models/staffnames.model';

@Injectable({
  providedIn: 'root'
})
export class DayoffService {

  constructor(private http: HttpClient, private staffInfoService: StaffInfoService) { }

  public getAllStaffnames(): Observable<staffnames[]>{
    return this.staffInfoService.getAllStaff().pipe(
      map((staff: Staff[]) => staff.map(member => {
        return  {
          id: member.id,
          fullnameTitle: `${member.rank} ${member.lastName} ${member.firstName}`
        }
      }))
    )
  }

  public saveDayOffDocument(doc: Day_off, staffID: string): Observable<{message:string}>{
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // return this.http.post<{message:string}>(`${environment.apiUrl}/dayoff/${staffID}`, doc, { headers });

    // return throwError(`Private Travor has only 3 days of ${doc.type} left`);

    return new Observable(observer => {
      setTimeout(() => {
        observer.next({message: "request saved successfully!"})
      }, 500);
    })

  }



}
