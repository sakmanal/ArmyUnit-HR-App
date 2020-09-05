import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Staff } from 'src/app/shared/models/staff.model';
import { NgForm } from '@angular/forms';
import { rank, specialty } from '../../shared/options/options';

interface dialogBox{
  title: string;
  staff: Staff;
  buttonText?: { ok: string, cancel: string}
}

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {

   member: Staff;
   @ViewChild(NgForm, { static: true }) staffForm: NgForm;
   title: string;
   buttonText: { ok: string, cancel: string};
   avatar: string;

   rank_options: string[] = rank;
   specialty_options: string[] = specialty;

  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: dialogBox) {
            this.member = data.staff;
            this.avatar = this.member.foto || '../../../assets/images/Useravatar.jpg';
            this.title = data.title || 'Edit';
            this.buttonText = data.buttonText || { ok: 'Save', cancel:'Cancel'};
            //this.initmatoptions()
          //  this.member.firstName = 'Sakis'
          //  this.member.lastName = 'Manal'
          //  //this.member.id = '78f345t7-4vi5t-854ytv'
          //  this.confirm()
    }

    public cancel(): void {
      this.dialogRef.close();
    }

    public xxx(value:string){
      console.log(value);

    }

    // private confirm() {
    //   this.dialogRef.close(this.member)
    // }




}
