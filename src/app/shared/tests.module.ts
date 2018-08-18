import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    Angulartics2Module.forRoot([Angulartics2GoogleTagManager], {
      pageTracking: {
        clearQueryParams: true,
        clearHash: true,
        clearIds: true
      },
      developerMode: !environment.googleAnalyticsProfile
    })
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    RouterTestingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxImageGalleryModule
  ],
  declarations: []
})
export class TestsModule {}
