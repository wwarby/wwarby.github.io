import { Injectable } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd } from '@angular/router';
import { Angulartics2 } from 'angulartics2';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadTimerService {

  private navigationStarted: number;
  private navigatingUrl: string;
  private siteLoadRecorded = false;

  constructor(router: Router, private readonly angulartics: Angulartics2) {

    router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        this.navigationStarted = Date.now();
        this.navigatingUrl = event.url;
    });

    router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {

        if (event.url === this.navigatingUrl) {
          const loadTime = Date.now() - this.navigationStarted;
          this.angulartics.userTimings.next({
            timingCategory: 'page',
            timingVar: 'load',
            timingValue: loadTime,
            timingLabel: event.url
          });
        }

        if (!this.siteLoadRecorded && window &&  window.performance) {
          this.angulartics.userTimings.next({
            timingCategory: 'app',
            timingVar: 'load',
            timingValue: window.performance.now()
          });
          this.siteLoadRecorded = true;
        }

        this.navigatingUrl = null;
        this.navigationStarted = null;
      });

  }

}
