import { DataService } from './../../shared/services/data.service';
import { PowerPipe } from './../../shared/pipes/power.pipe';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import {Injector} from '@angular/core';

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
       // SharedModule
      ],
      declarations: [ HomeComponent, 
                      PowerPipe
      ],

      providers: [
        DataService, 
        {
          provide: 'appTheme',
          useValue: 'blue'
        }
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log("***TESTING HOME")
    expect(component).toBeTruthy();
  });

  it('should increment value on increment call', () => {
     component.increment({bubbles: true});

     const injector: Injector =  fixture.debugElement.injector;
     const dataService: DataService = injector.get(DataService);

      expect(dataService.getLikes()).toBe(1001);
  });
});
