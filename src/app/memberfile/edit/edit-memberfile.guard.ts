import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EditContainerComponent } from './edit-container/edit-container.component';

@Injectable({
  providedIn: 'root'
})
export class MovieEditGuard implements CanDeactivate<EditContainerComponent> {

    canDeactivate(component: EditContainerComponent): boolean {

        // //component is dirty if it contains unsaved work
        // if (component.isDirty) {
        //     const title = component.movie.title || 'New Member File';

        //     //displays JavaScript Window confirm() Method
        //     //The confirm() method returns true if the user clicked "OK", and false otherwise (cancel button).
        //     //if false we prevent switching route
        //     return confirm(`Navigate away and lose all changes to ${title}?`);
        // }

        //we can switch route
        return true;
    }
}
