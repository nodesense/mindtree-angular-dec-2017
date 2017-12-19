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

    productService.getProducts = function(): Observable<Product[]> {
      return Observable.of([]);
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
