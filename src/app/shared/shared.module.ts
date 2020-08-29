import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule} from '../material.module';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchComponent, /* NotificationComponent */],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    SearchComponent
  ]
})
export class SharedModule { }
