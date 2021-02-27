import { Injectable } from '@angular/core';
import { Staff, Staffbasic } from '../../models/staff.model';
import { staff } from '@mock/staff';
import { environment } from '@environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class StaffInfoService {

  private staff: Staff[] = [];

  constructor(private http: HttpClient) { }

  public getAllStaff(): Observable<Staff[]>{
    /* Http GET request to a real server */
    // return this.http.get<Staff[]>(`${environment.apiUrl}/staff`)

    /* simulate server Error responce */
    // return throwError("server error");

    /* simulate server responce */
    if (this.staff.length) {
      return of(this.staff).pipe(delay(1000));
    }
    this.staff = [...staff];
    return of(this.staff).pipe(delay(1000));
  }

  public getStaff(id: string): Observable<Staff> {
    /* Http GET request to a real server */
    // return this.http.get<Staff>(`${environment.apiUrl}/staff/${id}`)

    /* simulate server Error responce */
     const index = this.staff.findIndex(member => member.id === id);
     if (index > 0) {
       return of(this.staff[index]);
     }
     return this.getAllStaff().pipe(
       map( members => {
         return members.find(m => m.id === id);
       })
     )
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
    this.staff = [...this.staff.filter(member => member.id !== id)];
    return of({message: "deleted successfully!"}).pipe(delay(1000));
  }

  public saveStaff(staff: Staff){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (staff.id === '0'){
      return this.addStaff(staff, headers);
    }
    return this.updateStaff(staff, headers);
  }

  private addStaff(member: Staff, headers: HttpHeaders): Observable<Staff>{
    /* Http POST request to a real server */
    //  staff.id = null;
    //  return this.http.post<Staff>(`${environment.apiUrl}/staff`, staff, { headers });

    /* simulate server responce */
    const newMember = {...member};
    newMember.id = uuidv4();
    this.staff.push(newMember);
    return of(newMember).pipe(delay(1000));
  }

  private updateStaff(member: Staff, headers: HttpHeaders): Observable<Staff>{
    /* Http PUT request to a real server */
    //  return this.http.put<Staff>(`${environment.apiUrl}/staff/${staff.id}`, staff, { headers });

    /* simulate server responce */
    const updatedMember: Staff = {
      ...member
    }
    const index = this.staff.findIndex( member => member.id === updatedMember.id);
    this.staff[index] = updatedMember;
    return of(updatedMember).pipe(delay(1000));
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

  saveNewStaff(member: Staff): Observable<Staff> {
    const newMember = {...member};
    this.staff.push(newMember);
    return of(newMember);
  }

}
