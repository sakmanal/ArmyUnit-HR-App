import { NgModule } from '@angular/core';
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

const modules = [ MatInputModule, MatProgressBarModule, MatButtonModule, MatGridListModule, MatSortModule,
                  MatCardModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatExpansionModule,
                  MatListModule, MatTableModule, MatDividerModule, MatMenuModule, MatProgressSpinnerModule,
                  MatTooltipModule, MatTabsModule, MatSnackBarModule, MatDialogModule ]
@NgModule({
imports: [...modules ],

exports: [...modules],
})
export class MaterialModule { }
