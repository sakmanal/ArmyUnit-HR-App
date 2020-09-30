import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';

const ShellRoutes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'staff',
        loadChildren: () => import('../staff/staff-info.module').then(m => m.StaffInfoModule)
      },
      {
        path: 'dayoff',
        loadChildren: () => import('../dayoff/dayoff.module').then(m => m.DayoffModule)
      },
      {
        path: 'dailyRoster',
        loadChildren: () => import('../roster/roster.module').then(m => m.RosterModule)
      },
      {
        path: 'memberFile',
        loadChildren: () => import('../memberfile/memberfile.module').then(m => m.MemberfileModule)
      }
    ]
  }
]

@NgModule({
  declarations: [
    ShellComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PageNotFoundComponent,
    SidenavComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(ShellRoutes)
  ]
})
export class ShellModule { }
