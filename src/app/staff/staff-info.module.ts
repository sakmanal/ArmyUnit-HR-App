import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffInfoComponent } from './staff-info/staff-info.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { SharedModule } from '@shared/shared.module';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { FormsModule } from '@angular/forms';

const staffRoutes: Routes = [
  { path: '', component: StaffInfoComponent }
]

@NgModule({
  declarations: [StaffInfoComponent, EditDialogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(staffRoutes),
    MaterialModule,
    SharedModule,
    FormsModule
  ],
  entryComponents: [
    EditDialogComponent
  ]
})
export class StaffInfoModule { }
