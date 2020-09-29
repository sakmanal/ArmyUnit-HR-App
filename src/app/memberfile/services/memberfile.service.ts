import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { MemberFile } from '../models/memberFile.model';
import { environment } from '@environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { createMemberfile } from '@mock/memberfile'
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemberfileService {

  constructor(private http: HttpClient) { }

  public getMemmberFile(id: string): Observable<MemberFile>{
    // return this.http.get<MemberFile>(`${environment.apiUrl}/memberfile/${id}`)
    // return throwError("server error");

    return of(createMemberfile(id)).pipe(delay(1000));
  }
}
