import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../../services/product.service';
import { RouterModule } from '@angular/router';

import { APP_BASE_HREF } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../models/product';

import "rxjs/Rx";

fdescribe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productService: ProductService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterModule.forRoot([])
      ],
      declarations: [ ProductListComponent ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        ProductService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;

    productService = fixture.debugElement.injector.get(ProductService);

    // mock for object function
    productService.getProducts = function(): Observable<Product[]> {
      console.log("Mock called");
      return Observable.of(<Product[]> [{id: 1, name: 'Nexus Phone ', price: 10000, year: 2018}]);
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    
    expect(component.products.length).toBe(1);
  });
});
