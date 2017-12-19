import { browser, by, element } from 'protractor';

export class AboutPage {
    navigateTo() {
        return browser.get('/about');
      }
  addMember() {
      alert("hello");
    element(by.buttonText('Add'));
  }
}
