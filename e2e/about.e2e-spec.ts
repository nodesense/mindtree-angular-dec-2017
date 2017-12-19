import { AppPage } from './app.po';
import { browser } from 'protractor';
import { AboutPage } from './about.po';


describe('product-app App', () => {
  let page: AppPage;
  let aboutPage: AboutPage;

  beforeEach(() => {
    page = new AppPage();
    aboutPage = new AboutPage();
  });
 
  it('should increment about member', () => {
    aboutPage.navigateTo();
    //page.navigateToPage('About');

    browser.driver.sleep(2000);
    //browser.sleep(5000);
    browser.waitForAngular();

    expect(page.getPageTitle()).toEqual('About');
    
    aboutPage.addMember();
    aboutPage.addMember();  
    console.log("added members");
    
    browser.sleep(5000);
  });

});
