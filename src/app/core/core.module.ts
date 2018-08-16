import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    NgxImageGalleryModule,
    SharedModule
  ],
  declarations: [
    NotFoundComponent,
    HomeComponent
  ]
})
export class CoreModule { }
