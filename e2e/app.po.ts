import { browser, by, element, protractor } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  navigateToHome() {
    //element(by.id('DIV-ID')).
    //element(by.buttonText('Button 1'))
    element(by.linkText('Home')).click();
  }

  navigateToPage(linkTitle : string) {
    element(by.linkText(linkTitle)).click();
  }


  getPageTitle() {
    return element(by.css('app-root h2')).getText();
  }
}
