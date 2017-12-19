import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

fdescribe('AboutComponent', () => {
  let component: AboutComponent;
  let element: any;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    element = fixture.nativeElement;
    fixture.detectChanges(); //trigger change detection
    expect(element.querySelectorAll('li').length).toBe(2);
    
    component.addMember();
    fixture.detectChanges(); //trigger change detection
    expect(element.querySelectorAll('li').length).toBe(3);


    component.empty();
    fixture.detectChanges(); //trigger change detection
    expect(element.querySelectorAll('li').length).toBe(0);


  });
});
