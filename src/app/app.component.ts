import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isOnline = true;

  constructor(
    public title: Title,
    public angulartics: Angulartics2GoogleAnalytics
  ) {

    this.isOnline = navigator.onLine;
    this.title.setTitle('William Warby');
  }

}
