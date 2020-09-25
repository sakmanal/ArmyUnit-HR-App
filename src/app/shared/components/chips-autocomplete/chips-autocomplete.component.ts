import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild, Input, Output, EventEmitter} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-chips-autocomplete',
  templateUrl: './chips-autocomplete.component.html',
  styleUrls: ['./chips-autocomplete.component.css']
})
export class ChipsAutocompleteComponent {

  @Input() selectable = true;
  @Input() removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  opts: string[] = [];
  @Input() placeholder: string = 'New option...';
  @Input() alloptions: string[] = [];
  @Input() set options(value: string[]) {
      if (value.length > 0){
        this.opts = [...value];
      }
  }
  @Output() optionsChange = new EventEmitter<string[]>();

  @ViewChild('optionInput') optionInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(null),
        map((val: string | null) => val ? this._filter(val) : this.alloptions.slice()));
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.opts.push(value.trim());
      this.optionsChange.emit(this.opts);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.myControl.setValue(null);
  }

  remove(opt: string): void {
    const index = this.opts.indexOf(opt);

    if (index >= 0) {
      this.opts.splice(index, 1);
      this.optionsChange.emit(this.opts);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.opts.push(event.option.viewValue);
    this.optionsChange.emit(this.opts);
    this.optionInput.nativeElement.value = '';
    this.myControl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.alloptions.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

}
