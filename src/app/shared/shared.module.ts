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

@NgModule({
  declarations: [
    SearchComponent,
    NumberDirective,
    DeleteDialogComponent,
    OptionsInputComponent,
    ChipsAutocompleteComponent,
    FloatingSearchComponent
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
    FloatingSearchComponent
  ],
  entryComponents: [
    DeleteDialogComponent
  ]
})
export class SharedModule { }
