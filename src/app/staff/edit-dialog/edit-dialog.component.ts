import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Staff } from 'src/app/core/models/staff.model';
import { NgForm } from '@angular/forms';
import { rank, specialty, platoon, class_I } from '../../shared/options/options';

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
   original_member: Staff;
   @ViewChild(NgForm, { static: true }) staffForm: NgForm;
   title: string;
   buttonText: { ok: string, cancel: string};
   avatar: string;

   rank_options: string[] = rank;
   specialty_options: string[] = specialty;
   platoon_options: string[] = platoon;
   classI_options: string[] = class_I;

  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: dialogBox) {
            this.member = {...data.staff};
            this.original_member = {...this.member};
            this.avatar = this.member.foto || '../../../assets/images/Useravatar.jpg';
            this.title = data.title || 'Edit';
            this.buttonText = data.buttonText || { ok: 'Save', cancel:'Cancel'};
    }

    public cancel(): void {
      this.dialogRef.close({event:'Cancel'});
    }

    public confirm() {
      if (this.IsValid()){
        this.dialogRef.close({event:'Confirm', member:this.member})
      }
    }

    public IsValid(): boolean{
       if (this.staffForm && this.staffForm.valid && this.member &&
           this.member.rank != '' && this.member.specialty[0] != '' &&
           this.member.specialty.length > 0){
         return true
       }
       return false
    }

    public get isDirty(): boolean {
      return JSON.stringify(this.member) !== JSON.stringify(this.original_member)
    }

}
