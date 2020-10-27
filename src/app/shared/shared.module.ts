import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberDirective } from './directives/numbersOnly.directive';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { OptionsInputComponent } from './components/options-input/options-input.component';
import { ChipsAutocompleteComponent } from './components/chips-autocomplete/chips-autocomplete.component';
import { FloatingSearchComponent } from './components/floating-search/floating-search.component';
import { StartEndDatepickerComponent } from './components/start-end-datepicker/start-end-datepicker.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    SearchComponent,
    NumberDirective,
    ConfirmDialogComponent,
    OptionsInputComponent,
    ChipsAutocompleteComponent,
    FloatingSearchComponent,
    StartEndDatepickerComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  exports: [
    NumberDirective,
    SearchComponent,
    ConfirmDialogComponent,
    OptionsInputComponent,
    ChipsAutocompleteComponent,
    FloatingSearchComponent,
    StartEndDatepickerComponent,
    PieChartComponent
  ],
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
