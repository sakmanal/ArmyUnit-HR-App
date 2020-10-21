import { Injectable } from '@angular/core';
import { ConfirmDialogComponent } from '@shared/components/confirm-dialog/confirm-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

  constructor(private dialog: MatDialog) { }

  public confirm(message: string, type?: 'delete' | 'save'): Observable<boolean> {
    const dialogConfig: MatDialogConfig = {
      width: '350px',
      data:{
        type: type,
        message: message,
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig);

    return dialogRef.afterClosed();
  }
}
