import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectFileComponent } from './select-file/select-file.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { DisplayFileComponent } from './display/display-file-container/display-file.component';
import { MemberFileResolver } from './services/memberfile.resolver';
import { TabsComponent } from './display/tabs/tabs.component';
import { DisplayInfoComponent } from './display/display-info/display-info.component';
import { DisplayPenaltiesComponent } from './display/display-penalties/display-penalties.component';
import { DisplayTrainingComponent } from './display/display-training/display-training.component';
import { DisplayShotsComponent } from './display/display-shots/display-shots.component';
import { DisplayDaysoffsComponent } from './display/display-daysoffs/display-daysoffs.component';
import { EditContainerComponent } from './edit/edit-container/edit-container.component';
import { MovieEditGuard } from './edit/edit-memberfile.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { EditPenaltiesFormComponent } from './edit/edit-penalties-form/edit-penalties-form.component';
import { EditShotsFormComponent } from './edit/edit-shots-form/edit-shots-form.component';
import { EditTrainingFormComponent } from './edit/edit-training-form/edit-training-form.component';
import { EditMedicalinfoFormComponent } from './edit/edit-medicalinfo-form/edit-medicalinfo-form.component';
import { EditPersonalinfoFormComponent } from './edit/edit-personalinfo-form/edit-personalinfo-form.component';
import { EditBasicinfoFormComponent } from './edit/edit-basicinfo-form/edit-basicinfo-form.component';

const memberfileRoutes: Routes = [
  { path: '', component: SelectFileComponent },
  {
    path: ':id',
    resolve: { memberfile: MemberFileResolver },
    component: DisplayFileComponent,
  },
  {
    path: ':id/edit',
    resolve: { memberfile: MemberFileResolver },
    canDeactivate: [MovieEditGuard],
    component: EditContainerComponent,
  },
];

@NgModule({
  declarations: [
    SelectFileComponent,
    DisplayFileComponent,
    TabsComponent,
    DisplayInfoComponent,
    DisplayPenaltiesComponent,
    DisplayTrainingComponent,
    DisplayShotsComponent,
    DisplayDaysoffsComponent,
    EditContainerComponent,
    EditPenaltiesFormComponent,
    EditShotsFormComponent,
    EditTrainingFormComponent,
    EditMedicalinfoFormComponent,
    EditPersonalinfoFormComponent,
    EditBasicinfoFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(memberfileRoutes),
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class MemberfileModule {}
