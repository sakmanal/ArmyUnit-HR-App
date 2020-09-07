import { Injectable } from '@angular/core';
import { Staff } from '../models/staff.model';
import { staff } from '../../mock-data/staff';
import { environment } from '@environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StaffInfoService {

  constructor(private http: HttpClient) { }

  public getAllStaff():Observable<Staff[]>{

    // return this.http.get<Staff[]>(`${environment.apiUrl}/allstaff`)
    //     .pipe(
    //         map(staff => {
    //                return staff
    //          })
    //     );

    // return throwError("server error");

    return new Observable(observer => {
       setTimeout(() => {
          observer.next([...staff])
       }, 1000);
    })
  }



  public deleteStaff(id: string): Observable<{message:string}> {
    //  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //  return this.http.delete<{message:string}>(`${environment.apiUrl}/staff/${id}`, { headers })
    //       .pipe(
    //           tap(result => console.log(result))
    //            );

        return new Observable(observer => {
          setTimeout(() => {
            observer.next({message: "deleted !"})
          }, 500);
      })

  }

  public saveStaff(staff: Staff){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (staff.id === '0'){
      return this.addStaff(staff, headers);
    }
    return this.updateStaff(staff, headers);
  }

  private addStaff(staff:Staff, headers: HttpHeaders): Observable<Staff>{
    //  staff.id = null;
    //  return this.http.post<Staff>(`${environment.apiUrl}/staff`, staff, { headers });

     const _staff: Staff = {
      id: '497F5D21-AEC0-89T4-ED67-6FD0D6AC70AA',
      firstName: staff.firstName,
      lastName: staff.lastName,
      rank: staff.rank,
      MilitaryRegisterNumber: staff.MilitaryRegisterNumber,
      platoon: staff.platoon,
      class_I: staff.class_I,
      specialty: staff.specialty,
      armed: staff.armed,
      class_info: staff.class_info,
      foto: staff.foto
     }

     return new Observable(observer => {
      setTimeout(() => {
         observer.next(_staff)
      }, 1000);
   })

  }

  private updateStaff(staff:Staff, headers: HttpHeaders): Observable<Staff>{
    //  return this.http.put<Staff>(`${environment.apiUrl}/staff/${staff.id}`, { headers });

     const _staff: Staff = {
      id: staff.id,
      firstName: staff.firstName,
      lastName: staff.lastName,
      rank: staff.rank,
      MilitaryRegisterNumber: staff.MilitaryRegisterNumber,
      platoon: staff.platoon,
      class_I: staff.class_I,
      specialty: staff.specialty,
      armed: staff.armed,
      class_info: staff.class_info,
      foto: staff.foto
     }

     return new Observable(observer => {
      setTimeout(() => {
         observer.next(_staff)
      }, 1000);
   })
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
      specialty: ['']
    }
  }







}
