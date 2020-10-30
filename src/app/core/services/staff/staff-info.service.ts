import { Injectable } from '@angular/core';
import { Staff, Staffbasic } from '../../models/staff.model';
import { staff } from '@mock/staff';
import { environment } from '@environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StaffInfoService {

  constructor(private http: HttpClient) { }

  public getAllStaff():Observable<Staff[]>{
    /* Http GET request to a real server */
    // return this.http.get<Staff[]>(`${environment.apiUrl}/allstaff`)

    /* simulate server Error responce */
    // return throwError("server error");

    /* simulate server responce */
    return new Observable(observer => {
       setTimeout(() => {
          observer.next([...staff])
       }, 1000);
    })
  }

  public getAllStaffnames(): Observable<Staffbasic[]>{
    return this.getAllStaff().pipe(
      map((staff: Staff[]) => staff.map(member => {
        return  {
          id: member.id,
          firstName: member.firstName,
          lastName: member.lastName,
          rank: member.rank,
          fullnameTitle: `${member.rank} - ${member.lastName} ${member.firstName}`,
          foto: member.foto,
          platoon: member.platoon
        }
      }))
    )
  }

  public deleteStaff(id: string): Observable<{message:string}> {
    /* Http DELETE request to a real server */
    //  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //  return this.http.delete<{message:string}>(`${environment.apiUrl}/staff/${id}`, { headers })

    /* simulate server responce */
    return of({message: "deleted successfully!"}).pipe(delay(1000));
  }

  public saveStaff(staff: Staff){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (staff.id === '0'){
      return this.addStaff(staff, headers);
    }
    return this.updateStaff(staff, headers);
  }

  private addStaff(staff: Staff, headers: HttpHeaders): Observable<Staff>{
    /* Http POST request to a real server */
    //  staff.id = null;
    //  return this.http.post<Staff>(`${environment.apiUrl}/staff`, staff, { headers });

    /* simulate server responce */
    const _staff: Staff = {
      id: '497F5D21-AEC0-89T4-ED67-6FD0D6AC70AA',
      ...staff
    }
    return of(_staff).pipe(delay(1000));
  }

  private updateStaff(staff:Staff, headers: HttpHeaders): Observable<Staff>{
    /* Http PUT request to a real server */
    //  return this.http.put<Staff>(`${environment.apiUrl}/staff/${staff.id}`, staff, { headers });

    /* simulate server responce */
    const _staff: Staff = {
      ...staff
    }
    return of(_staff).pipe(delay(1000));
  }

  public getEmptyStaff(): Staff {
    return {
      id: '0',
      firstName: '',
      lastName: '',
      rank: '',
      MilitaryRegisterNumber: '',
      platoon: null,
      class_I: null,
      specialty: []
    }
  }

}
