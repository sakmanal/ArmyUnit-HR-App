import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/helpers/auth.guard'
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
      path: '',
      canActivate: [AuthGuard],
      loadChildren: () => import('./shell/shell.module').then(m => m.ShellModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

