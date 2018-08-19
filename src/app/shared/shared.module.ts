import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackLinkDirective } from './track-link.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [TrackLinkDirective],
  exports: [TrackLinkDirective]
})
export class SharedModule {}
