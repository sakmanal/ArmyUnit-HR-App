import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-options-input',
  templateUrl: './options-input.component.html',
  styleUrls: ['./options-input.component.css']
})
export class OptionsInputComponent implements OnInit {

  myControl = new FormControl();
  @Input() options: string[] = [];
  @Input() label: string = '';
  @Input() allowRandomOption: boolean = true;
  @Input() placeholder: string = 'Pick one';
  @Input() set option(value: string) {
    this.myControl.setValue(value);
  }
  @Output() optionChange = new EventEmitter<string>();
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    // this.myControl.setValue("some @input initvalue");
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    const filteredOptions = this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);

    if (!this.allowRandomOption){
      this.control(filteredOptions)
    }else{
      this.optionChange.emit(this.myControl.value);
    }
    return filteredOptions
  }

  private control(filteredOptions: string[]){
    if (filteredOptions.length > 0){
      this.optionChange.emit(this.myControl.value);
    }else{
      this.myControl.setErrors({ notexist: true});
    }
  }

  public getValidationError(): string{
    if (this.myControl.hasError('required')){
      return this.placeholder + ' is <strong>required</strong>';
    }
    if (this.myControl.hasError('notexist')){
      return this.placeholder + ' <strong>not found</strong>';
    }
  }

}
