import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLoadService } from './app-load.service';

// tslint:disable:only-arrow-functions

export function initializeApp(appLoadService: AppLoadService) {
  return () => appLoadService.initializeApp();
}

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [AppLoadService], multi: true }
  ],
  declarations: []
})
export class AppLoadModule { }
