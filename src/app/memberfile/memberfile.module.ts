import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectFileComponent } from './select-file/select-file.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { DisplayFileComponent } from './display/display-file/display-file.component';
import { MemberFileResolver } from './memberfile.resolver';

const memberfileRoutes: Routes = [
  { path: '', component: SelectFileComponent },
  {
    path: ':id',
    resolve: { memberfile: MemberFileResolver },
    component: DisplayFileComponent
  }
]

@NgModule({
  declarations: [SelectFileComponent, DisplayFileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(memberfileRoutes),
    SharedModule,
    MaterialModule,
    FormsModule
  ]
})
export class MemberfileModule { }
