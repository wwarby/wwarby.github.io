import { browser, by, element } from 'protractor';

export class HomePage {

  public async navigateTo() {
    return browser.get('/');
  }

  public async getMainHeading() {
    return element(by.css('app-root h1')).getText();
  }

  public async clickPhoto(photo: 'left' | 'middle' | 'right') {
    return element(by.css(`app-root .photography img.${photo}`)).click();
  }

  public async closeGallery() {
    return element(by.css('ngx-image-gallery .close')).click();
  }

  public async getActiveImageSrc() {
    return element(by.css(`ngx-image-gallery .image.active img`)).getAttribute('src');
  }

}
