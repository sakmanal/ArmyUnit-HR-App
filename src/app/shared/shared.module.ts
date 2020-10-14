import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberDirective } from './directives/numbersOnly.directive';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { OptionsInputComponent } from './components/options-input/options-input.component';
import { ChipsAutocompleteComponent } from './components/chips-autocomplete/chips-autocomplete.component';
import { FloatingSearchComponent } from './components/floating-search/floating-search.component';
import { StartEndDatepickerComponent } from './components/start-end-datepicker/start-end-datepicker.component';

@NgModule({
  declarations: [
    SearchComponent,
    NumberDirective,
    DeleteDialogComponent,
    OptionsInputComponent,
    ChipsAutocompleteComponent,
    FloatingSearchComponent,
    StartEndDatepickerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NumberDirective,
    SearchComponent,
    DeleteDialogComponent,
    OptionsInputComponent,
    ChipsAutocompleteComponent,
    FloatingSearchComponent,
    StartEndDatepickerComponent
  ],
  entryComponents: [
    DeleteDialogComponent
  ]
})
export class SharedModule { }
