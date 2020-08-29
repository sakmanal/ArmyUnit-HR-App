import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffInfoComponent } from './staff-info/staff-info.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';

const firstOfficeRoutes: Routes = [
  { path: '', component: StaffInfoComponent }
]

@NgModule({
  declarations: [StaffInfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(firstOfficeRoutes),
    MaterialModule,
    SharedModule
  ]
})
export class StaffInfoModule { }
