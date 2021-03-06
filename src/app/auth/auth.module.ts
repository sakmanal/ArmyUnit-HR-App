import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TestUserComponent } from './test-user/test-user.component';

@NgModule({
  declarations: [LoginComponent, TestUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
    ]),
  ]
})
export class AuthModule { }
