import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EditContainerComponent } from './edit-container/edit-container.component';
import { PreviousCurrentUrlService } from '@core/services/routes-url/previousCurrentUrl.service';
@Injectable({
  providedIn: 'root'
})
export class EditGuard implements CanDeactivate<EditContainerComponent> {

  constructor(private previousCurrentUrlService: PreviousCurrentUrlService) {}

  canDeactivate(component: EditContainerComponent): boolean {

      // component is dirty if it contains unsaved work
      if (component.isDirty) {
          return confirm('Member File form is containing unsaved data. Navigate away and lose all changes?');
      }

      // we can switch route
      return true;
  }
}
