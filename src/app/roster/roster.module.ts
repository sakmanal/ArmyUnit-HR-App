import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyRosterComponent } from './daily-roster/daily-roster.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RosterTableComponent } from './roster-table/roster-table.component';
import { SharedModule } from '@shared/shared.module';
import { RosterReportComponent } from './roster-report/roster-report.component';

const rosterRoutes: Routes = [
  { path: '', component: DailyRosterComponent }
]

@NgModule({
  declarations: [DailyRosterComponent, RosterTableComponent, RosterReportComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(rosterRoutes),
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class RosterModule { }
