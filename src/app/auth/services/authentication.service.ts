import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;


  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public login(militaryRegistryNum: string, password: string):Observable<User> {
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { militaryRegistryNum, password }, {headers})
    //     .pipe(
    //         map(user => {
    //               localStorage.setItem('currentUser', JSON.stringify(user));
    //               this.currentUserSubject.next(user);
    //               return user;
    //          }),
    //         // catchError(this.handleError)
    //     );

       if ( militaryRegistryNum !== "12345" || password !== "1993"){
          return throwError("Wrong Military ID or Password")
       }

        const user:User = {
            id: 'str12356',
            firstName: 'Nikolaos',
            lastName: 'Papas',
            rank: 'Master Sergeant',
            MilitaryRegisterNumber: militaryRegistryNum,
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMzUwMDAwMDk3MTQiLCJuYW1lIjoiTmlrb2xhb3MgUGFwYXMiLCJpYXQiOjE1MTYyMzkwMjJ9.Kl6KfICgBHeqyRGpNwwFifM4AhkuYgHu9bQipkyDmh0',
            role: 'admin'
          }


        return new Observable(observer => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
           setTimeout(() => {
              observer.next(user)
           }, 1000);
        })

  }


  // private handleError(err: HttpErrorResponse) {

  //   let errorMessage: string;
  //   if (err.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     errorMessage = `An error occurred: ${err.error.message}`;
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     errorMessage = `Backend returned code ${err.status}: ${err.message}`;
  //   }
  //   console.error(err);
  //   return throwError(errorMessage);
  // }

  public logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
