import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@auth/guards/auth.guard'
import { LoginComponent } from '@auth/login/login.component';
import { PageNotFoundComponent } from './shell/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
      path: '',
      canActivate: [AuthGuard],
      loadChildren: () => import('./shell/shell.module').then(m => m.ShellModule)
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

