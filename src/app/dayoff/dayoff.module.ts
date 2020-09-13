import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { DayOffComponent } from './day-off/day-off.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

const dayoffRoutes: Routes = [
  { path: '', component: DayOffComponent }
]

@NgModule({
  declarations: [DayOffComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dayoffRoutes),
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    AutocompleteLibModule
  ]
})
export class DayoffModule { }
