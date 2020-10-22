import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

interface dialogBox{
  message: string;
  buttonText?: { ok: string, cancel: string};
  type?: "warning" | "continue";
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {

  message: string = "Are you sure?";
  confirmButtonText = "Yes";
  cancelButtonText = "Cancel";
  type = "warning";

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: dialogBox) {
      if(data){
        this.message = data.message || this.message;
        this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
        this.type = data.type || this.type;
      }
    }

  public cancel(): void {
    this.dialogRef.close(false);
  }

  public confirm(): void {
    this.dialogRef.close(true)
  }


}
