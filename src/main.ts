import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {

  // Add Google Analytics scripts
  if (environment.googleAnalyticsProfile) {

    let script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${environment.googleAnalyticsProfile}`;
    document.head.appendChild(script);

    script = document.createElement('script');
    script.innerHTML = [
      'window.dataLayer = window.dataLayer || [];',
      'function gtag() { dataLayer.push(arguments); }',
      'gtag(\'js\', new Date());',
      `gtag(\'config\', '${environment.googleAnalyticsProfile}');`
    ].join('\r\n');
    document.head.appendChild(script);

  }

  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
