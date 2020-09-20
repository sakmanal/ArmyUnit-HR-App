import { Component, OnInit } from '@angular/core';
import { DayoffService } from '../../core/services/dayOff/dayoff.service';
import { FormControl } from '@angular/forms';
import { NotificationService } from '../../core/services/notification/notification.service';

@Component({
  selector: 'app-daily-roster',
  templateUrl: './daily-roster.component.html',
  styleUrls: ['./daily-roster.component.css']
})
export class DailyRosterComponent implements OnInit {

  selectedDate = new FormControl(new Date());
  loading:boolean;

  constructor( private dayoffService: DayoffService,
               private notificationService: NotificationService ) { }

  ngOnInit(): void {
      this.getDailyRoster(this.selectedDate.value);
  }

  onDateChange(){
    if (this.selectedDate.valid){
      this.getDailyRoster(this.selectedDate.value)
    }
  }

  private getDailyRoster(date: Date){
    this.loading = true;
    this.dayoffService.getDailyRoster(date).subscribe(
      (roster) => {
         this.loading = false;
         console.log(roster);
       },
       (error) => {
        this.loading = false;
        this.notificationService.showError(error);
       }
    )
  }



}
