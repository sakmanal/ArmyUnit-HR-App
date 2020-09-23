import { Component, OnInit } from '@angular/core';
import { DailyRosterService } from '../../core/services/roster/daily-roster.service';
import { FormControl } from '@angular/forms';
import { NotificationService } from '../../core/services/notification/notification.service';
import { DailyRoster, MemberDailyState, DailyRosterReport } from '../models/dailyRoster.model';

@Component({
  selector: 'app-daily-roster',
  templateUrl: './daily-roster.component.html',
  styleUrls: ['./daily-roster.component.css']
})
export class DailyRosterComponent implements OnInit {

  selectedDate = new FormControl(new Date());
  loading: boolean;
  officersRoster: MemberDailyState[] = [];
  soldiersRoster: MemberDailyState[] = [];
  dailyRosterReport: DailyRosterReport;
  filterValue: string;

  constructor( private dailyRosterService: DailyRosterService,
               private notificationService: NotificationService ) { }

  ngOnInit(): void {
      this.getDailyRoster(this.selectedDate.value);
  }

  public onDateChange(){
    if (this.selectedDate.valid){
      this.getDailyRoster(this.selectedDate.value)
    }
  }

  private getDailyRoster(date: Date){
    this.loading = true;
    this.dailyRosterService.getDailyRoster(date).subscribe(
      (roster: DailyRoster) => {
         this.loading = false;
         this.officersRoster = [...roster.officersRoster];
         this.soldiersRoster = [...roster.soldiersRoster];
         this.dailyRosterReport = {...roster.report};
       },
       (error) => {
        this.loading = false;
        this.notificationService.showError(error);
       }
    )
  }

  public onFilter(filterValue: string){
     this.filterValue = filterValue;
  }

  public createpdf(action: 'export' | 'print'){

  }

}


