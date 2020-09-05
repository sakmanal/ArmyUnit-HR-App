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
  @Input() placeholder: string = 'Pick one';
  @Input() inputValue:string = '';
  filteredOptions: Observable<string[]>;
  @Output() outputValue = new EventEmitter<string>();

  ngOnInit() {
    this.myControl.setValue(this.inputValue);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    this.outputValue.emit(this.myControl.value);
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  // public getValidationError(){
  //   if (this.myControl.hasError('required')){
  //     return 'selection is required';
  //   }
  // }

}
