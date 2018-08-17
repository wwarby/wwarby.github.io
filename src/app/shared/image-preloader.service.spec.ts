import { TestBed, inject } from '@angular/core/testing';

import { ImagePreloaderService } from './image-preloader.service';

describe('ImagePreloaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImagePreloaderService]
    });
  });

  it('should be created', inject([ImagePreloaderService], (service: ImagePreloaderService) => {
    expect(service).toBeTruthy();
  }));

  it('should preload images', inject([ImagePreloaderService], (service: ImagePreloaderService) => {
    service.preloadImage('assets/photography/large/00001.jpg');
    expect(service['images'].length).toBe(1);
  }));

  it('should not load the same image twice', inject([ImagePreloaderService], (service: ImagePreloaderService) => {
    service.preloadImage('assets/photography/large/00001.jpg');
    service.preloadImage('assets/photography/large/00001.jpg');
    service.preloadImage('assets/PHOTOGRAPHY/large/00001.jpg');
    expect(service['images'].length).toBe(1);
  }));
});
