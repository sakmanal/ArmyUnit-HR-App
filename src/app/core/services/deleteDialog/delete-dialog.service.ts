import { Injectable } from '@angular/core';
import { ConfirmDialogComponent } from '@shared/components/confirm-dialog/confirm-dialog.component';
import { StaffInfoService } from '../staff/staff-info.service';
import { Staff } from '../../models/staff.model';
import { switchMap, filter } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DeleteDialogService {

  constructor(private dialog: MatDialog, private staffInfoService: StaffInfoService,) { }

  public deleteStaffmember(member: Staff): Observable<{message:string}> {
    const dialogConfig: MatDialogConfig = {
      width: '350px',
      data:{
        message: `Are you sure want to remove ${member.rank} ${member.lastName} from company's power?`,
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig);

    return dialogRef.afterClosed().pipe(
      filter( (confirmed: boolean) => confirmed ),
      switchMap(() => { return this.staffInfoService.deleteStaff(member.id) })
    )
  }
}
