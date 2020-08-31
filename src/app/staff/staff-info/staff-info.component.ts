import { Component, OnInit, ViewChild } from '@angular/core';
import { StaffInfoService } from '../../shared/services/staff-info.service';
import { tableData } from '../models/tableData.model';
import { Staff } from '../../shared/models/staff.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { NotificationService } from '../../shared/services/notification.service';
import { DeleteDialogComponent } from '../../shared/components/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-staff-info',
  templateUrl: './staff-info.component.html',
  styleUrls: ['./staff-info.component.css']
})

export class StaffInfoComponent implements OnInit {

  loading:boolean;
  displayedColumns = ['no', "fullname", "rank", "military_ID", "platton", "class_I", "specialty", 'actions']
  dataSourse = new MatTableDataSource<tableData>();
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
              private staffInfoService: StaffInfoService,
              private notificationService: NotificationService,
              private dialog: MatDialog
              ) { }

  ngOnInit(): void {
    this.loading = true;
    this.staffInfoService.getAllStaff().subscribe(
      (staff) => {
        this.dataSourse = new MatTableDataSource(this.mapData(staff));
        this.dataSourse.sort = this.sort;
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
                  id: d.id,
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
    this.dataSourse.filter = filterValue.trim().toLowerCase();
  }

  public deleteStaffmember(member: tableData){
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '350px',
      data:{
        message: `Are you sure want to remove ${member.rank} ${member.fullname} from company's power?`,
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    });

    dialogRef.afterClosed().subscribe( (confirmed:boolean) => {
      if (confirmed){
        this.staffInfoService.deleteStaff(member.id)
           .subscribe(
             (success) => {
                this.removeMemberFromTable(member.id)
                this.notificationService.showSuccess(success.message)
             },
             (error) => {
                this.notificationService.showError(error);
             }
           )
      }

    });
  }

  private removeMemberFromTable(id: string){
    const tmpData = this.dataSourse.data.filter(d => d.id != id)
    this.dataSourse = new MatTableDataSource(tmpData);
  }

}
