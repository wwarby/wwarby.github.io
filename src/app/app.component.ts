import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Angulartics2GoogleAnalytics } from 'angulartics2';
import { LoadTimerService } from './core/load-timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isOnline = true;

  constructor(
    public title: Title,
    public angulartics: Angulartics2GoogleAnalytics,
    public timer: LoadTimerService
  ) {
    this.isOnline = navigator.onLine;
    this.title.setTitle('William Warby');
    this.angulartics.startTracking();
  }

}
