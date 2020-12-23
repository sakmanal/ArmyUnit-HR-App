import { Injectable } from '@angular/core';
import { combineLatest, Observable, of, throwError } from 'rxjs';
import { MemberFile } from '../models/memberFile.model';
import { environment } from '@environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { createMemberfile } from '@mock/memberfile'
import { delay, map } from 'rxjs/operators';
import { Day_off, _DayOff } from '@core/models/day_off.model';
import { DayoffService } from '@core/services/dayOff/dayoff.service';
import { StaffInfoService } from '@core/services/staff/staff-info.service';
import { Staff } from '@core/models/staff.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class MemberfileService {

  memberFiles: MemberFile[] = [];

  constructor(private http: HttpClient,
              private staffInfoService: StaffInfoService,
              private dayoffService: DayoffService) { }

  public getMemmberFile(id: string): Observable<MemberFile>{

    if (id === '0'){
      return of({
        member: this.staffInfoService.getEmptyStaff(),
        days_off: [],
        personal_info: null,
        shots:[],
        training: [],
        penalties: [],
        medical_info: null
      })
    }

    /* Http GET request to a real server */
    // return this.http.get<MemberFile>(`${environment.apiUrl}/memberfile/${id}`)

    /* simulate server responce with RxJS data composition */

    const memberDaysOff$: Observable<_DayOff[]> = this.dayoffService.getDaysOff()
    .pipe(
      map((days_off: Day_off[]) => {
        const memberDaysOff = days_off.filter( member => member.staffmember.staff_id == id);
        return memberDaysOff.map(d => {
          return {
            type: d.type,
            start_date: d.start_date,
            end_date: d.end_date,
            destination: d.destination,
            id: d.id
          }
        });
      })
    );

    const memberFile$: Observable<MemberFile> = this.staffInfoService.getStaff(id)
    .pipe(
      map( (member: Staff) => {
        const file = this.memberFiles.find(file => file.member.id === member.id)
        if (file) {
          return file;
        }
        const fakefile = createMemberfile(member);
        this.memberFiles.push(fakefile);
        return fakefile;
      })
    );

    return combineLatest( [memberFile$, memberDaysOff$] ).pipe(
      map(([memberFile, memberDaysOff]) => {
        memberFile.days_off = memberDaysOff;
        return {
          ...memberFile,
          days_off: memberDaysOff
        }
      })
    )
  }

  public saveMemberFile(file: MemberFile){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (file.member.id === '0'){
      return this.addMemberFile(file, headers);
    }
    return this.updateMemberFile(file, headers);
  }

  private updateMemberFile(file: MemberFile, headers: HttpHeaders): Observable<MemberFile>{
    /* Http PUT request to a real server */
    // return this.http.put<MemberFile>(`${environment.apiUrl}/memberfile/${file.member.id}`, file, { headers });

    /* simulate server responce */
    const updatedFile: MemberFile = {
      ...file
    }
    const index = this.memberFiles.findIndex(file => file.member.id === updatedFile.member.id);
    updatedFile.member.foto = this.memberFiles[index].member.foto;
    this.memberFiles[index] = updatedFile;
    this.staffInfoService.saveStaff(updatedFile.member).subscribe();
    return of(updatedFile).pipe(delay(1000));
  }

  private addMemberFile(file: MemberFile, headers: HttpHeaders): Observable<MemberFile>{
    /* Http POST request to a real server */
    //  file.member.id = null;
    //  return this.http.post<MemberFile>(`${environment.apiUrl}/memberfile`, file, { headers });

    /* simulate server responce */
    const newFile = {...file};
    newFile.member.id = uuidv4();
    this.memberFiles.push(newFile);
    this.staffInfoService.saveNewStaff(newFile.member).subscribe();
    return of(newFile).pipe(delay(1000));
  }
}
