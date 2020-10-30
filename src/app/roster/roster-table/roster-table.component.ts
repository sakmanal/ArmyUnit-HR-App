import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { MemberDailyState } from '../models/dailyRoster.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-roster-table',
  templateUrl: './roster-table.component.html',
  styleUrls: ['./roster-table.component.css']
})
export class RosterTableComponent implements OnChanges {

  @Input() data: MemberDailyState[];
  @Input() filterValue: string;
  dataSource = new MatTableDataSource<MemberDailyState>();
  displayedColumns = ['no', 'rank', 'fullname', 'state'];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data){
       this.dataSource = new MatTableDataSource(this.data);
    }
    if (changes.filterValue){
      this.dataSource.filter = this.filterValue.trim().toLowerCase();
    }
  }

}
