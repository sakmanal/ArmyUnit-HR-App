import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';


const staffRoutes: Routes = [
  { path: '', component: TaskManagerComponent }
]

@NgModule({
  declarations: [TaskManagerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(staffRoutes),
    MaterialModule
  ]
})
export class TasksModule { }
