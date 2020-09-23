import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { DailyRoster } from '../models/dailyRoster.model';
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
  // _data: DailyRoster[];
  // @Input() set data(dataArray: DailyRoster[]){
  //    this._data = dataArray;
  //    console.log(this._data);
  // }

  @Input() data: DailyRoster[];
  @Input() filterValue: string;
  dataSource = new MatTableDataSource<DailyRoster>();
  displayedColumns = ['no', 'rank', 'fullname', 'state'];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.data);
    if (this.filterValue){
      this.dataSource.filter = this.filterValue.trim().toLowerCase();
    }
  }

}
