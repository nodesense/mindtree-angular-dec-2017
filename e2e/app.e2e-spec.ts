import { AppPage } from './app.po';
import { browser } from 'protractor';


xdescribe('product-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Product App');
  });


  it('should load home page', () => {
    page.navigateTo();
    page.navigateToHome();
    expect(page.getParagraphText()).toEqual('Product App');
  });


  it('should load about page', () => {
    page.navigateTo();
    page.navigateToPage('About');
    expect(page.getPageTitle()).toEqual('About');
    browser.sleep(5000);
  });

});
