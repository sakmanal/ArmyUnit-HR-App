import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClassInfo } from '../../models/classInfo.model';
import { class_series, years } from '@shared/options/options';
import { distinctUntilChanged, map } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-classinfo-form',
  templateUrl: './edit-classinfo-form.component.html',
  styleUrls: ['./edit-classinfo-form.component.css']
})
export class EditClassinfoFormComponent implements OnInit {

  @Input() editForm: FormGroup;
  @Input() classInfoData: ClassInfo;
  class_series_types: string[] = class_series;
  years_array = years();
  enableClassInfoFormControl: boolean;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
     if (this.classInfoData){
        this.enableClassInfoFormControl = true;
        this.initClassInfoFormControl();
     }
  }

  public handleClassInfoFormControl(): void {
    if (this.enableClassInfoFormControl) {
      this.initClassInfoFormControl();
    }else{
      this.removeClassInfoFormControl();
    }
  }

  private initClassInfoFormControl(){
    this.editForm.addControl('class_info', this.classInfoForm);
    if ( this.classInfoData ) {
      this.patchData();
    }

    /*  2nd way -- valueChanges subscription on its formControl separately */
    this.editForm.get('class_info').get('months_of_service').valueChanges
      .subscribe( value => this.setDismissal_date(this.classInfoFormControls.start_date.value, value))

    this.editForm.get('class_info').get('start_date').valueChanges
      .subscribe( value => this.setDismissal_date(value, this.classInfoFormControls.months_of_service.value))
  }

  private removeClassInfoFormControl(){
     this.editForm.removeControl('class_info');
  }

  private get classInfoForm(): FormGroup {
    return this.formBuilder.group({
      training_series: this.formBuilder.group({
        class_series: ['', Validators.required],
        class_year: ['', Validators.required]
      }),
      months_of_service: ['', [Validators.required, Validators.min(1), Validators.max(20)]],
      start_date: ['', Validators.required],
      dismissal_date : ['']
    });
  }

  private patchData(): void{
    this.editForm.patchValue({
      class_info: this.classInfoData
    });
  }

  public get classInfoFormControls() {
    const g = this.editForm.get('class_info') as FormGroup;
    return g.controls
  }

  private setDismissal_date(startDate: Date, months: number): void{
    const dismissal_date = moment(startDate).add(months, 'months').toDate();
    this.classInfoFormControls.dismissal_date.setValue(dismissal_date);
  }

}
