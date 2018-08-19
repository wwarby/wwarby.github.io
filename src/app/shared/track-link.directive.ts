import { Directive, HostListener, ElementRef } from '@angular/core';
import { Angulartics2 } from 'angulartics2';

@Directive({
  selector: '[appTrackLink]'
})
export class TrackLinkDirective {

  @HostListener('click', ['$event']) onClick($event: MouseEvent) {
    const url = this.el.nativeElement.getAttribute('href');
    this.angulartics.pageTrack.next({
      path: `/external/${url}`
    });
  }

  constructor(private readonly el: ElementRef, private readonly angulartics: Angulartics2) { }

}
