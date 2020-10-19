import {NgModule} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSortModule} from '@angular/material/sort';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MAT_DATE_FORMATS} from '@angular/material/core';

const MY_FORMATS = {
  parse: {
    dateInput: 'DD MMMM YYYY',
  },
  display: {
    dateInput: 'DD MMMM YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

const modules = [ MatInputModule, MatProgressBarModule, MatButtonModule, MatGridListModule, MatSortModule,
                  MatCardModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatExpansionModule,
                  MatListModule, MatTableModule, MatDividerModule, MatMenuModule, MatProgressSpinnerModule,
                  MatTooltipModule, MatTabsModule, MatSnackBarModule, MatDialogModule, MatAutocompleteModule,
                  MatSelectModule, MatRadioModule, MatChipsModule, MatDatepickerModule, MatMomentDateModule,
                  MatSliderModule, MatSlideToggleModule ]
@NgModule({
imports: [...modules ],

exports: [...modules],
providers: [
  { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
]
})
export class MaterialModule { }
