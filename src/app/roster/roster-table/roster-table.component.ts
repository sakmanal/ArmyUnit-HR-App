import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { MemberDailyState } from '../models/dailyRoster.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-roster-table',
  templateUrl: './roster-table.component.html',
  styleUrls: ['./roster-table.component.css']
})
export class RosterTableComponent implements OnChanges {
  /**
   *  One advantage of ngOnChanges() is that you get all changes at once
   *  if your component has several @Input()s.
   *  If your code only depends on a single @Input() a setter is probably the better approach.
   *
   */

  @Input() data: MemberDailyState[];
  @Input() filterValue: string;
  dataSource = new MatTableDataSource<MemberDailyState>();
  displayedColumns = ['no', 'rank', 'fullname', 'state'];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // this.dataSource = new MatTableDataSource(this.data);
    // if (this.filterValue) this.dataSource.filter = this.filterValue.trim().toLowerCase();
    if (changes.data){
       this.dataSource = new MatTableDataSource(this.data);
    }
    if (changes.filterValue){
      this.dataSource.filter = this.filterValue.trim().toLowerCase();
    }
  }

}
