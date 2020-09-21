import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyRosterComponent } from './daily-roster/daily-roster.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RosterTableComponent } from './roster-table/roster-table.component';

const rosterRoutes: Routes = [
  { path: '', component: DailyRosterComponent }
]

@NgModule({
  declarations: [DailyRosterComponent, RosterTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(rosterRoutes),
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class RosterModule { }
