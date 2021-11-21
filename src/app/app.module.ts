import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { Angulartics2Module } from 'angulartics2';
import { environment } from '../environments/environment';
import { AppLoadModule } from './app-load/app-load.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxImageGalleryModule,
    Angulartics2Module.forRoot({
      pageTracking: {
        clearQueryParams: true,
        clearHash: true,
        clearIds: true
      },
      developerMode: !environment.googleAnalyticsProfile
    }),
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    AppLoadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
