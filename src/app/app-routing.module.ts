import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShellComponent } from './shell/shell/shell.component';
import { AuthGuard } from './auth/helpers/auth.guard'
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
    {
      path: '',
      canActivate: [AuthGuard],
      component: ShellComponent
    },
    { path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

