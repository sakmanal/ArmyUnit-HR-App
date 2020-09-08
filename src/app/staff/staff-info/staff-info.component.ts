import { Component, OnInit, ViewChild } from '@angular/core';
import { StaffInfoService } from '../../shared/services/staff-info.service';
import { DeleteDiaologService } from '../../shared/services/delete-diaolog.service';
// import { tableData } from '../models/tableData.model';
import { Staff } from '../../shared/models/staff.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { NotificationService } from '../../shared/services/notification.service';
import { DeleteDialogComponent } from '../../shared/components/delete-dialog/delete-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { switchMap, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-staff-info',
  templateUrl: './staff-info.component.html',
  styleUrls: ['./staff-info.component.css']
})

export class StaffInfoComponent implements OnInit {

  loading:boolean;
  load:boolean;
  avatarFoto:string = '../../../assets/images/Useravatar.jpg';
  displayedColumns = ['no', "fullname", "rank", "military_ID", "platoon", "class_I", "specialty", 'actions']
  dataSource = new MatTableDataSource<Staff>();
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
              private staffInfoService: StaffInfoService,
              private notificationService: NotificationService,
              private dialog: MatDialog,
              private deleteDiaologService : DeleteDiaologService
              ) { }

  ngOnInit(): void {
    this.loading = true;
    this.staffInfoService.getAllStaff().subscribe(
      (staff) => {
        // this.dataSource = new MatTableDataSource(this.mapData(staff));
        this.dataSource = new MatTableDataSource(staff);
        this.dataSource.sort = this.sort;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        this.notificationService.showError(error);
      }
    )
  }

  // private mapData(staffdata: Staff[]): tableData[]{
  //        return staffdata.map(
  //             d => {
  //               return {
  //                 id: d.id,
  //                 fullname: `${d.lastName} ${d.firstName}`,
  //                 rank: d.rank,
  //                 platton: d.platton,
  //                 militaryID: d.MilitaryRegisterNumber,
  //                 class_I: d.class_I,
  //                 specialty: d.specialty[0],
  //                 foto: d.foto
  //               }
  //             }
  //        )
  // }

  public getfilter(filterValue:string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public deleteStaffmember(member: Staff){
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '350px',
      data:{
        message: `Are you sure want to remove ${member.rank} ${member.lastName} from company's power?`,
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    });

    dialogRef.afterClosed().pipe(
      filter( (confirmed: boolean) => confirmed ),
      switchMap(() => {
          this.load = true;
          return this.staffInfoService.deleteStaff(member.id)
      })
    ).subscribe(
        (success) => {
          /* 1st way */
          this.removeMemberFromTable(member.id);

          /* 2nd way */
          // const data = this.dataSource.data;
          // const index = data.indexOf(member);
          // data.splice(index, 1);
          // this.dataSource.data = data;

          this.load = false;
          this.notificationService.showSuccess(success.message);
        },
        (error) => {
          this.load = false;
          this.notificationService.showError(error);
        }
    );


    /* open dialog from deleteDiaologService */
    /* works but we can't begin the load-bar after the diolog is closed */
    // this.deleteDiaologService.deleteStaffmember(member).subscribe(
    //          (success) => {
    //             this.removeMemberFromTable(member.id);
    //             this.notificationService.showSuccess(success.message);
    //          },
    //          (error) => {
    //             this.notificationService.showError(error);
    //          }
    // )
  }

  private removeMemberFromTable(id: string){
    const tmpData = this.dataSource.data.filter(d => d.id != id)
    this.dataSource = new MatTableDataSource(tmpData);
  }

  public editStaffmember(member?: Staff){
    const title = member ? `Edit member:` : 'Add new staff member';
    const staff = member ? {...member} : this.staffInfoService.getEmptyStaff();
    const ok = member ? 'Update' : 'Save'

    const options: MatDialogConfig = {
      width: '800px',
      autoFocus: false,
      data:{
        title: title,
        staff: staff,
        buttonText: {
          ok: ok,
          cancel: 'Cancel'
        }
      }
    }

    this._editStaffmember(options);
  }

  private _editStaffmember(options: MatDialogConfig){
    const dialogRef = this.dialog.open(EditDialogComponent, options);

    /* works but we have nested subscribe into subscribe */
    // dialogRef.afterClosed().subscribe( (data) => {
    //   if (data.event == 'Confirm'){
    //     this.load = true;
    //     this.staffInfoService.saveStaff(data.member)
    //        .subscribe(
    //          (staffmember) => {
    //             this.updateTableWithMember(staffmember);
    //             this.load = false;
    //             this.notificationService.showSuccess('Staff Updated');
    //          },
    //          (error) => {
    //             this.load = false;
    //             this.notificationService.showError(error);
    //          }
    //        )
    //   }

    dialogRef.afterClosed().pipe(
      filter( (data: {event: string, member: Staff} ) => data.event == 'Confirm' ),
      map( data => { return data.member }),
      switchMap((member: Staff) => {
          this.load = true;
          return this.staffInfoService.saveStaff(member)
      })
    ).subscribe(
        (staffmember) => {
          this.updateTableWithMember(staffmember);
          this.load = false;
          this.notificationService.showSuccess('Staff Updated');
        },
        (error) => {
          this.load = false;
          this.notificationService.showError(error);
        }
    );

  }

  private updateTableWithMember(member: Staff){
    const data = this.dataSource.data;
    const index = data.findIndex(d => d.id == member.id);
    if (index >= 0 ){                                          /* if member exists, update it */
      data[index] = member;
    }else{                                                     /* else add new member "sorting" by rank*/
      const index = data.findIndex(d => d.rank == member.rank)
      data.splice(index, 0, member);
    }
    this.dataSource.data = [...data];
    // this.dataSource._updateChangeSubscription();        /* also works insteed of above line */
  }


}
