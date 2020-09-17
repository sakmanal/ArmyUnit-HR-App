import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  public showSuccess(message: string, action:string = "close"): void {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['success'],
      horizontalPosition: "left",
      verticalPosition: "bottom"
    });
  }

  public showError(message: string, action:string = "close"): void {
    this.snackBar.open(message, action, {
      duration: 4000,
      panelClass: ['error'],
      horizontalPosition: "right",
      verticalPosition: "bottom"
    });
  }
}
