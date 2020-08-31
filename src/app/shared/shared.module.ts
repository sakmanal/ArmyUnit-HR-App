import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { NumberDirective } from './helpers/numbersOnly.directive';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [SearchComponent, NumberDirective, DeleteDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    NumberDirective,
    SearchComponent,
    DeleteDialogComponent
  ],
  entryComponents: [
    DeleteDialogComponent
  ]
})
export class SharedModule { }
