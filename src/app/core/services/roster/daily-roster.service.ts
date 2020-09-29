import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { MemberDailyState, DailyRoster } from '@app/roster/models/dailyRoster.model';
import { Staffbasic } from '../../models/staff.model';
import { combineLatest, Observable, of, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { StaffInfoService } from '../staff/staff-info.service';
import { DayoffService } from '../dayOff/dayoff.service';
import { Day_off } from '../../models/day_off.model';

@Injectable({
  providedIn: 'root'
})
export class DailyRosterService {

   constructor(private dayoffService: DayoffService,
               private staffInfoService: StaffInfoService) { }

   private IsBetween(start: Date, end: Date, current: Date): boolean{
    return moment(current).isBetween(moment(start), moment(end), 'days', '[]')
   }

    public getDailyRoster(date: Date): Observable<DailyRoster>{
      const daysOff$ =  this.dayoffService.getDaysOff()
      .pipe(
        // tap(() => console.log('daysoff retrieved')),
        map( daysOff =>
          daysOff.filter( (dayOff: Day_off) =>
              this.IsBetween(dayOff.start_date, dayOff.end_date, date)
              )
          )
      );

      const staffmembers$ = this.staffInfoService.getAllStaffnames();
            // .pipe(tap(() => console.log('Staffnames retrieved')));

      return combineLatest( [daysOff$, staffmembers$] )
      .pipe(
        map( ([daysOff, staffmembers]) =>
            staffmembers.map((member: Staffbasic) => {
                const dayoff = daysOff.find(dayoff => dayoff.staffmember.staff_id == member.id);
                const isPresent = !dayoff;
                return {
                  rank: member.rank,
                  fullname: `${member.lastName} ${member.firstName}`,
                  state: isPresent? 'Present' : `day-off until ${moment(dayoff.end_date).format('DD/MM/YYYY')}`
                }
            })
          ),
          map((membersState: MemberDailyState[]) => {
            return this.separateRoster(membersState)
          })

      )

  }

  private separateRoster(membersState: MemberDailyState[]): DailyRoster {
    const officersRoster = [];
    const soldiersRoster = [];
    let count = 0
    membersState.forEach( member => {

      // seperate members
      if (member.rank == 'Lance Corporal' || member.rank == 'Private'){
          soldiersRoster.push(member);
      }else{
        officersRoster.push(member);
      }

      // count members
      if (member.state == 'Present'){
        count ++;
      }
    })
    return {
      soldiersRoster: soldiersRoster,
      officersRoster: officersRoster,
      report: {
        count_total: membersState.length,
        count_present: count,
        count_unpresent: membersState.length - count
      }
    }
  }
}
