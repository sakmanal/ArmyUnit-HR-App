import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectFileComponent } from './select-file/select-file.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { DisplayFileComponent } from './display/display-file-container/display-file.component';
import { MemberFileResolver } from './memberfile.resolver';
import { TabsComponent } from './display/tabs/tabs.component';
import { DisplayInfoComponent } from './display/display-info/display-info.component';

const memberfileRoutes: Routes = [
  { path: '', component: SelectFileComponent },
  {
    path: ':id',
    resolve: { memberfile: MemberFileResolver },
    component: DisplayFileComponent
  }
]

@NgModule({
  declarations: [SelectFileComponent, DisplayFileComponent, TabsComponent, DisplayInfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(memberfileRoutes),
    SharedModule,
    MaterialModule,
    FormsModule
  ]
})
export class MemberfileModule { }
