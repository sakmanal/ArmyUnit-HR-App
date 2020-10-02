import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { _DayOff } from '@core/models/day_off.model';
import { MemberFile } from '../../models/MemberFile.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-display-daysoffs',
  templateUrl: './display-daysoffs.component.html',
  styleUrls: ['./display-daysoffs.component.css']
})
export class DisplayDaysoffsComponent implements OnInit {

  dataSource = new MatTableDataSource<_DayOff>();
  displayedColumns = ['no', 'type', 'start_date', 'end_date', 'destination'];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const resolvedData  = this.route.snapshot.data['memberfile'];
    this.onFileRetrieved(resolvedData);
  }

  private onFileRetrieved(file: MemberFile){
    if (file){
       this.dataSource = new MatTableDataSource(file.days_off);
    }
  }

}
