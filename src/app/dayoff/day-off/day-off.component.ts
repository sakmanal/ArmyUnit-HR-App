import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DayoffService } from '../services/dayoff.service';
import { Staffnames } from '../models/staffnames.model';
import { NotificationService } from '../../shared/services/notification.service';
import { Day_off } from '../../shared/models/day_off.model';
import { dayoffTypes } from '../../shared/options/options';

@Component({
  selector: 'app-day-off',
  templateUrl: './day-off.component.html',
  styleUrls: ['./day-off.component.css']
})
export class DayOffComponent implements OnInit {

  dayOffForm: FormGroup;
  loading:boolean = false;
  staffnames: Staffnames[];
  dayoff_Types: string[] = dayoffTypes;
  minDate: Date = new Date();
  maxDate: Date = new Date(new Date().getFullYear() + 1, 11, 31);

  constructor( private formBuilder: FormBuilder,
               private dayoffService: DayoffService,
               private notificationService: NotificationService ) {
    this.createForm();
  }

  private createForm() {
    this.dayOffForm = this.formBuilder.group({
      fullname: [null, Validators.required],
      type: ['', Validators.required],
      start_date: [null, Validators.required],
      end_date: [null, Validators.required]
    });

    this.form.fullname.valueChanges
    .subscribe(value => {
      if (!value.id){
        this.form.fullname.setErrors({ notexist: true })
      }
    });

  }

  ngOnInit(): void {
    this.loading = true;
    this.dayoffService.getAllStaffnames().subscribe(
      (staffnames) => {
        this.staffnames = staffnames;
        this.loading = false;
      },
      (error) => {
        this.notificationService.showError(error);
      }
    )
   }

  public get form() { return this.dayOffForm.controls; }

  xxx(){
     console.log(this.form.fullname.value.id);
     console.log(this.form.type.value);
     console.log(this.form.start_date.value._i);
  }

  public onSubmit() {
    if (this.dayOffForm.invalid) {
      return;
    }

    this.loading = true;
    const doc: Day_off = {
      id: null,
      type: this.form.type.value,
      start_date: this.form.start_date.value,
      end_date: this.form.end_date.value
    }
    const staffID = this.form.fullname.value.id;
    this.dayoffService.saveDayOffDocument(doc, staffID).subscribe(
      (success) => {
        this.loading = false;
        this.notificationService.showSuccess(success.message);
      },
      (error) => {
        this.loading = false;
        this.notificationService.showError(error);
      }
    )

  }

}
