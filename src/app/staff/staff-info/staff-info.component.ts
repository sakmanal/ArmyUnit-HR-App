import { Component, OnInit, ViewChild } from '@angular/core';
import { StaffInfoService } from '../../shared/services/staff-info.service';
import { tableData } from '../models/tableData.model';
import { Staff } from '../../shared/models/staff.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { NotificationService } from '../../shared/services/notification.service';

@Component({
  selector: 'app-staff-info',
  templateUrl: './staff-info.component.html',
  styleUrls: ['./staff-info.component.css']
})

export class StaffInfoComponent implements OnInit {

  loading:boolean;
  displayedColumns = ['no', "fullname", "rank", "military_ID", "platton", "class_I", "specialty", 'actions']
  data = new MatTableDataSource<tableData>();
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
              private staffInfoService: StaffInfoService,
              private notificationService: NotificationService
              ) { }

  ngOnInit(): void {
    this.loading = true;
    this.staffInfoService.getAllStaff().subscribe(
      (staff) => {
        this.data = new MatTableDataSource(this.mapData(staff));
        this.data.sort = this.sort;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        this.notificationService.showError(error);
      }
    )
  }

  private mapData(staffdata: Staff[]): tableData[]{
         return staffdata.map(
              d => {
                return {
                  no: staffdata.indexOf(d) + 1,
                  fullname: `${d.lastName} ${d.firstName}`,
                  rank: d.rank,
                  platton: d.platton,
                  militaryID: d.MilitaryRegisterNumber,
                  class_I: d.class_I,
                  specialty: d.specialty[0],
                  foto: d.foto
                }
              }
         )
  }

  public getfilter(filterValue:string){
    this.data.filter = filterValue.trim().toLowerCase();
  }

}
