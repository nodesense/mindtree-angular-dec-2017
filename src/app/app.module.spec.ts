import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import {Location} from "@angular/common";
import {TestBed, fakeAsync, tick} from '@angular/core/testing';

import {RouterTestingModule} from "@angular/router/testing";

import {Router} from "@angular/router";

import {
    routes
} from "./app.module"
import { SharedModule } from './shared/shared.module';

fdescribe('Router: App', () => {

  let location: Location;
  let router: Router;
  let fixture;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [ 
         AppComponent,
         HomeComponent, 
         ContactComponent, 
         AboutComponent,
         HeaderComponent,
         FooterComponent
      ]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router.initialNavigation();
  });

// it('navigate to "" redirects you to /about', fakeAsync(() => { 
//   router.navigateByUrl('/contact'); 
//   tick(1000); 
    
//   fixture.detectChanges();

//   console.log("-------", location.path());
//   expect(location.path()).toBe('/about'); 
    
// }));


  // it('navigate to "" redirects you to /about', ((done) => { 
  //   router.navigate(['/about']); 
  //   //tick(); 
     
  //   fixture.detectChanges();

  //   setTimeout( () => {
  //     console.log("-------", location.path());
  //     expect(location.path()).toBe('/about'); 
  //     done();
  //   }, 2000);

    
     
  // }));


});