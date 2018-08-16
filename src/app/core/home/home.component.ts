import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxImageGalleryComponent, GALLERY_IMAGE, GALLERY_CONF } from 'ngx-image-gallery';
import { padStart, endsWith } from 'lodash';
import { ImagePreloaderService } from '../../shared/image-preloader.service';

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

  constructor(private readonly preloader: ImagePreloaderService) {

    const imageCount = 16;

    for (let x = 1; x < imageCount + 1; x++) {
      this.photographyGalleryImages.push({
        url: this.numberedImageUrl(x),
        altText: 'Copyright © William Warby',
        thumbnailUrl: this.numberedImageUrl(x, true)
      });
      preloader.preloadImage(this.numberedImageUrl(x, true));
    }

    preloader.preloadImage(this.numberedImageUrl(2));
    preloader.preloadImage(this.numberedImageUrl(7));
    preloader.preloadImage(this.numberedImageUrl(16));
  }

  private numberedImageUrl(imageNumber: number, thumbnail = false) {
    return `assets/photography/${thumbnail ? 'thumbnail' : 'large'}/${padStart(imageNumber.toString(), 5, '0')}.jpg`;
  }

  public openPhotographyGallery(index: number = 0) {
    this.photographyGallery.open(index);
  }

  public photographyGalleryOpened() {
    this.photographyGalleryImages.forEach(x => this.preloader.preloadImage(x.url));
  }

}
