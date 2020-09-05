import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberDirective } from './helpers/numbersOnly.directive';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { OptionsInputComponent } from './components/options-input/options-input.component';

@NgModule({
  declarations: [SearchComponent, NumberDirective, DeleteDialogComponent, OptionsInputComponent],
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
    OptionsInputComponent
  ],
  entryComponents: [
    DeleteDialogComponent
  ]
})
export class SharedModule { }
