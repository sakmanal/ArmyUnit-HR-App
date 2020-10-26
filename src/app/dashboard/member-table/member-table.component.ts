import { AfterViewInit, Component, ViewChild, OnInit, Input } from '@angular/core';
import { MemberDailyState } from '@app/roster/models/dailyRoster.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Platoon } from '@core/models/staff.model';

@Component({
  selector: 'app-member-table',
  templateUrl: './member-table.component.html',
  styleUrls: ['./member-table.component.css']
})
export class MemberTableComponent implements OnInit, AfterViewInit{

  dataSource = new MatTableDataSource<MemberDailyState>();
  displayedColumns = ['no', 'fullname', 'rank', 'platoon', 'state', 'file'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  avatarFoto:string = '../../../assets/images/Useravatar.jpg';
  @Input() set filter(value: string){
    if (value) {
      this.dataSource.filter = value.trim().toLowerCase();
    }
  }

  /*
      Best way when we have an @input() that changes dynamically from parent component.
      Another way would be ngOnChanges() whice is suitable when we have several @Input()s.
      Also, the setter is working even if we don't check ( *ngIf="data.length" ) on parent component.
   */
  // @Input() set data(dataArray: MemberDailyState[]){
  //    this.dataSource = new MatTableDataSource(dataArray);
  // }

  /*
      for non-changing @Input() from parent component.
      Must check if data exists ( *ngIf="data.length" ) on parent component.
   */
  @Input() data: MemberDailyState[];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  public getChipColor(platoon: Platoon): 'primary' | 'warn' | 'accent' {
    if (platoon === '1st' || platoon == 'command'){
      return 'primary'
    }
    else if (platoon === '2nd' || platoon === '3rd'){
      return 'accent'
    }
    else {
      return 'warn'
    }
  }

}
