import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DayoffService } from '../../core/services/dayOff/dayoff.service';
import { Staffbasic } from '../../core/models/staff.model';
import { NotificationService } from '../../core/services/notification/notification.service';
import { Day_off } from '../../core/models/day_off.model';
import { dayoffTypes } from '../../shared/options/options';
import { CreatepdfService } from '../../core/services/createPdf/createpdf.service';
import { DayoffDoc } from '../../dayoff/models//dayoffdoc.model';

@Component({
  selector: 'app-day-off',
  templateUrl: './day-off.component.html',
  styleUrls: ['./day-off.component.css']
})
export class DayOffComponent implements OnInit {

  dayOffForm: FormGroup;
  loading:boolean = false;
  staffnames: Staffbasic[];
  dayoff_Types: string[] = dayoffTypes;
  minDate: Date = new Date();
  maxDate: Date = new Date(new Date().getFullYear() + 1, 11, 31);
  submited: boolean = false;

  constructor( private formBuilder: FormBuilder,
               private dayoffService: DayoffService,
               private notificationService: NotificationService,
               private createpdfService: CreatepdfService ) {
    this.createForm();
    this.onChanges();
  }

  private createForm(): void {
    this.dayOffForm = this.formBuilder.group({
      fullname: [null, Validators.required],
      type: ['', Validators.required],
      destination: ['', Validators.required],
      start_date: [null, Validators.required],
      end_date: [null, Validators.required]
    });
  }

  private onChanges(): void {
    this.dayOffForm.valueChanges.subscribe(() => {
         this.submited = false;
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
        this.loading = false;
        this.notificationService.showError(error);
      }
    )
   }

  public get form() { return this.dayOffForm.controls; }

  public onSubmit(): void {
    if (this.dayOffForm.invalid) {
      return;
    }

    this.loading = true;
    this.submited = false;
    const doc: Day_off = {
      id: null,
      type: this.form.type.value,
      destination: this.form.destination.value,
      start_date: this.form.start_date.value.toDate(),
      end_date: this.form.end_date.value.toDate(),
      staffmember: { staff_id: this.form.fullname.value }
    }

    this.dayoffService.saveDayOffDocument(doc).subscribe(
      (success) => {
        this.loading = false;
        this.notificationService.showSuccess(success.message);
        this.submited = true;
      },
      (error) => {
        this.loading = false;
        this.notificationService.showError(error);
      }
    )

  }

  public createpdf(action: 'export' | 'print'){
      if (this.submited){
        const pdfdoc: DayoffDoc = {
          fullnameTitle: this.staffnames.find( name => name.id == this.form.fullname.value).fullnameTitle,
          destination: this.form.destination.value,
          startDate: this.form.start_date.value,
          endDate: this.form.end_date.value,
          type: this.form.type.value
        }
        this.createpdfService.dayoffPdf(pdfdoc, action);
      }
  }

}