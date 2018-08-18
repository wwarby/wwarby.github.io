import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isOnline = true;

  constructor(
    public title: Title,
    public angulartics: Angulartics2GoogleTagManager
  ) {
    this.isOnline = navigator.onLine;
    this.title.setTitle('William Warby');
  }

}
