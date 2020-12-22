import { Component, OnInit, Input } from '@angular/core';
import { DailyRosterReport } from '@core/models/dailyRoster.model';

@Component({
  selector: 'app-roster-report',
  templateUrl: './roster-report.component.html',
  styleUrls: ['./roster-report.component.css']
})
export class RosterReportComponent implements OnInit {

  @Input() dailyRosterReport: DailyRosterReport

  constructor() { }

  ngOnInit(): void {
  }

}
