import { browser, by, element } from 'protractor';

export class AppPage {

  public async navigateTo() {
    return browser.get('/');
  }

  public async getMainHeading() {
    return element(by.css('app-root h1')).getText();
  }

}
