import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxImageGalleryComponent, GALLERY_IMAGE, GALLERY_CONF } from 'ngx-image-gallery';
import { padStart } from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(NgxImageGalleryComponent) photographyGallery: NgxImageGalleryComponent;

  photographyGalleryConfig: GALLERY_CONF = {
    imageOffset: '20px',
    showDeleteControl: false,
    showImageTitle: false,
    imageBorderRadius: '0',
    closeOnEsc: true,
    backdropColor: ''
  };

  photographyGalleryImages: GALLERY_IMAGE[] = [];

  constructor() { }

  ngOnInit() {
    for (let x = 1; x < 17; x++) {
      const filename = `${padStart(x.toString(), 5, '0')}.jpg`;
      this.photographyGalleryImages.push({
        url: `assets/photography/large/${filename}`,
        altText: 'Copyright © William Warby',
        title: '',
        thumbnailUrl: `assets/photography/thumbnail/${filename}`
      });
    }
  }

  openPhotographyGallery(index: number = 0) {
    this.photographyGallery.open(index);
  }

}
