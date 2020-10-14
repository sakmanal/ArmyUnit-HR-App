import { Component, forwardRef, OnDestroy, ChangeDetectionStrategy, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormBuilder, FormGroup, Validators, FormControl, NG_VALIDATORS } from '@angular/forms';
import { Subscription } from 'rxjs';

interface StartEndDates {
  start_date: Date;
  end_date: Date;
}

@Component({
  selector: 'app-start-end-datepicker',
  templateUrl: './start-end-datepicker.component.html',
  styleUrls: ['./start-end-datepicker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StartEndDatepickerComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => StartEndDatepickerComponent),
      multi: true,
    }
  ]
})
export class StartEndDatepickerComponent implements ControlValueAccessor, OnDestroy  {

  form: FormGroup;
  subscriptions: Subscription[] = [];
  @Input() maxDate: Date = new Date(2060, 1, 1);
  @Input() minDate: Date = new Date(1980, 1, 1);
  @Input() label: string = 'Select Dates';
  @Input() appearance: 'outline' | 'standard' | 'fill' = 'standard';

  get value(): StartEndDates {
    return this.form.value;
  }

  set value(value: StartEndDates) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  get emailControl() {
    return this.form.controls.email;
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      start_date: ['', Validators.required],
      end_date: ['', Validators.required]
    });

    this.subscriptions.push(
      this.form.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  get dateform() { return this.form.controls; }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn) {
    this.onChange = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }

    if (value === null) {
      this.form.reset();
    }
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  validate(_: FormControl) {
    return this.form.valid ? null : { StartEndDates: { valid: false, }, };
  }


}
