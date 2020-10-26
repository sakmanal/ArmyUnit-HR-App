import { Component, OnInit } from '@angular/core';
import { DailyRosterService } from '@core/services/roster/daily-roster.service';
import { MemberDailyState } from '@app/roster/models/dailyRoster.model';

@Component({
  selector: 'app-dash-container',
  templateUrl: './dash-container.component.html',
  styleUrls: ['./dash-container.component.css']
})
export class DashContainerComponent implements OnInit {

  todayDate:Date = new Date();
  loading:boolean;
  memberDailyState: MemberDailyState[] = [];
  filterValue: string;

  constructor(private dailyRosterService: DailyRosterService) { }

  ngOnInit(): void {
    this.getDailyRoster(this.todayDate);
  }

  private getDailyRoster(date: Date){
    this.loading = true;
    this.dailyRosterService.getWholeDailyRoster(date).subscribe(
      (data: MemberDailyState[]) => {
         this.loading = false;
         this.memberDailyState = [...data];
       },
       (error) => {
        this.loading = false;
       }
    )
  }

  public onFilter(filterValue: string){
    this.filterValue = filterValue;
 }

}
