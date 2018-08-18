import { Component, ViewChild } from '@angular/core';
import { NgxImageGalleryComponent, GALLERY_IMAGE, GALLERY_CONF } from 'ngx-image-gallery';
import { padStart } from 'lodash';
import { ImagePreloaderService } from '../../shared/image-preloader.service';
import { Angulartics2 } from 'angulartics2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild(NgxImageGalleryComponent) public photographyGallery: NgxImageGalleryComponent;

  public photographyGalleryConfig: GALLERY_CONF = {
    imageOffset: '20px',
    showDeleteControl: false,
    showImageTitle: false,
    imageBorderRadius: '0',
    closeOnEsc: true,
    backdropColor: ''
  };

  public photographyGalleryImages: GALLERY_IMAGE[] = [];

  public photographyGalleryImageCount = 16;

  constructor(
    public readonly preloader: ImagePreloaderService,
    public angulartics: Angulartics2
  ) {
    for (let x = 1; x < this.photographyGalleryImageCount + 1; x++) {
      this.photographyGalleryImages.push({
        url: this.numberedImageUrl(x),
        altText: 'Copyright © William Warby',
        thumbnailUrl: this.numberedImageUrl(x, true)
      });
      preloader.preloadImage(this.numberedImageUrl(x, true));
    }

    preloader.preloadImage(this.numberedImageUrl(1));
    preloader.preloadImage(this.numberedImageUrl(2));
    preloader.preloadImage(this.numberedImageUrl(3));
  }

  private numberedImageUrl(imageNumber: number, thumbnail = false) {
    return `assets/photography/${thumbnail ? 'thumbnail' : 'large'}/${padStart(imageNumber.toString(), 5, '0')}.jpg`;
  }

  public openPhotographyGallery(photo: number = 1) {
    if (photo < 1 || photo > this.photographyGalleryImageCount) { photo = 1; }
    this.photographyGallery.open(photo - 1);
    this.angulartics.eventTrack.next({ action: 'open', properties: { category: 'gallery', label: `portfolio/photography/${photo}` }});
  }

  public photographyGalleryOpened() {
    this.photographyGalleryImages.forEach(x => this.preloader.preloadImage(x.url));
  }

}
