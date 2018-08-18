import { browser, by, element } from 'protractor';

/* tslint:disable:promise-function-async */

export class HomePage {

  public navigateTo() {
    return browser.get('/');
  }

  public getMainHeading() {
    return element(by.css('app-root h1')).getText();
  }

  public clickPhoto(photo: 'left' | 'middle' | 'right') {
    element(by.css(`app-root .photography img.${photo}`)).click();
    browser.sleep(50);
  }

  public closeGallery() {
    element(by.css('ngx-image-gallery .close')).click();
    browser.sleep(50);
  }

  public getActiveImageSrc() {
    return element(by.css(`ngx-image-gallery .image.active img`)).getAttribute('src');
  }

}
