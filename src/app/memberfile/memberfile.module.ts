import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectFileComponent } from './select-file/select-file.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';

const memberfileRoutes: Routes = [
  { path: '', component: SelectFileComponent }
]

@NgModule({
  declarations: [SelectFileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(memberfileRoutes),
    SharedModule,
    MaterialModule
  ]
})
export class MemberfileModule { }
