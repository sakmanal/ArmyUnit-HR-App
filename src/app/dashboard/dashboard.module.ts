import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashContainerComponent } from './dash-container/dash-container.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { MemberTableComponent } from './member-table/member-table.component';
import { SharedModule } from '@shared/shared.module';

const dashboardRoutes: Routes = [
  { path: '', component: DashContainerComponent }
]

@NgModule({
  declarations: [DashContainerComponent, MemberTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    MaterialModule,
    SharedModule
  ]
})
export class DashboardModule { }
