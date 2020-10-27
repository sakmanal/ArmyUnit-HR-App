import { Component, OnInit } from '@angular/core';
import { DailyRosterService } from '@core/services/roster/daily-roster.service';
import { MemberDailyState, wholeDailyRoster, DailyRosterReport } from '@app/roster/models/dailyRoster.model';

@Component({
  selector: 'app-dash-container',
  templateUrl: './dash-container.component.html',
  styleUrls: ['./dash-container.component.css']
})
export class DashContainerComponent implements OnInit {

  todayDate:Date = new Date();
  loading:boolean;
  memberDailyState: MemberDailyState[] = [];
  report: DailyRosterReport;
  filterValue: string;

  constructor(private dailyRosterService: DailyRosterService) { }

  ngOnInit(): void {
    this.getDailyRoster(this.todayDate);
  }

  private getDailyRoster(date: Date){
    this.loading = true;
    this.dailyRosterService.getDailyRosterReport(date).subscribe(
      (data: wholeDailyRoster) => {
         this.loading = false;
         this.memberDailyState = data.roster;
         this.report = data.report;
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
