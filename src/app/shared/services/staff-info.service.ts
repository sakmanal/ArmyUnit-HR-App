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

    // return this.http.get<Staff[]>(`${environment.apiUrl}/staff`)
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



  public deleteStaff(id: string): Observable<{}> {
     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    //  return this.http.delete<Staff>(`${environment.apiUrl}/staff/${id}`, { headers })
    //       .pipe(
    //           tap(result => console.log(result))
    //            )

        return new Observable(observer => {
          setTimeout(() => {
            observer.next({message: "Private Miller is deleted"})
          }, 500);
      })

  }





}
