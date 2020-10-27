import { Component, OnInit, Input } from '@angular/core';
import { DailyRosterReport } from '@app/roster/models/dailyRoster.model';

@Component({
  selector: 'app-roster-chart',
  templateUrl: './roster-chart.component.html',
  styleUrls: ['./roster-chart.component.css']
})
export class RosterChartComponent implements OnInit {

  @Input() reportData: DailyRosterReport;
  pieChartData: number[];
  pieChartLabels: string[];

  constructor() { }

  ngOnInit(): void {
    if (this.reportData){
      this.pieChartData = [this.reportData.percentage.present_per, this.reportData.percentage.unpresent_per];
      this.pieChartLabels = ['present staff', 'unpresent staff'];
    }

  }

}
