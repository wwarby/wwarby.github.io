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

  public photographyImageLabels = [
    'swallowtail',
    'st-pauls',
    'turtle',
    'molly-hat',
    'london-eye',
    'gherkin',
    'iceberg',
    'caterpillar',
    'gorilla',
    'valencia',
    'stitchwort',
    'pudding-glasses',
    'death-valley',
    'hunting-lodge',
    'zebras',
    'fireworks'
  ];

  constructor(
    public readonly preloader: ImagePreloaderService,
    public angulartics: Angulartics2
  ) {
    for (let x = 1; x <= this.photographyImageLabels.length; x++) {
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
    // tslint:disable-next-line:max-line-length
    return `assets/photography/${thumbnail ? 'thumbnail' : 'large'}/${padStart(imageNumber.toString(), 3, '0')}-${this.photographyImageLabels[imageNumber - 1]}.jpg`;
  }

  public openPhotographyGallery(index: number = 0) {
    if (index < 0 || index > this.photographyGalleryImages.length - 1) { index = 0; }
    this.photographyGallery.open(index);
    this.angulartics.eventTrack.next({ action: 'open', properties: { category: 'gallery', label: `portfolio/photography` }});
    this.angulartics.eventTrack.next({ action: 'view', properties: { category: 'photo', label: `${this.photographyImageLabels[index]}` }});
  }

  public photographyGalleryOpened(index: number) {
    this.preloadNextImages(index, 2);
  }

  public photographyGalleryImageChanged(index: number) {
    this.angulartics.eventTrack.next({ action: 'view', properties: { category: 'photo', label: `${this.photographyImageLabels[index]}` }});
    this.preloadNextImages(index, 2);
  }

  private preloadNextImages(index: number, quantity: number) {
    for (let x = Math.max(0, index - quantity); x <= Math.min(this.photographyGalleryImages.length - 1, index + quantity); x++) {
      this.preloader.preloadImage(this.photographyGalleryImages[x].url);
    }
  }

}
