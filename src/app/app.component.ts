import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';
import { filter, pairwise, tap } from 'rxjs/operators';
import { PreviousCurrentUrlService } from '@core/services/routes-url/previousCurrentUrl.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading:boolean = true;

  constructor(private router: Router, private previousCurrentUrlService: PreviousCurrentUrlService) {
    router.events.pipe(
        tap((routerEvent: Event) => {
          this.checkRouterEvent(routerEvent);
        }),
        filter((evt: any) => evt instanceof RoutesRecognized),
        pairwise()
      )
      .subscribe((events: RoutesRecognized[]) => {
        this.previousCurrentUrlService.preUrl = events[0].urlAfterRedirects;
        this.previousCurrentUrlService.currUrl = events[1].urlAfterRedirects;
      });
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
        this.loading = false;
    }
  }
}
