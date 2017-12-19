import { TestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { ProductService, ProductWebService } from './product.service';


fdescribe('ProductService', () => {
  let productService: ProductWebService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductWebService]
    });

    productService = TestBed.get(ProductWebService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([ProductWebService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));


  xit('should return error if products request failed', (done) => {
    productService.getProducts()
                   .subscribe((res: any) => {
                     expect(res.failure.error.type).toBe('ERROR_LOADING_PRODUCTS');
                     done();
                   });

    let productsRequest = httpMock.expectOne('http://localhost:7070/api/products');
    productsRequest.error(new ErrorEvent('ERROR_LOADING_PRODUCTS'));

    httpMock.verify();
  });

  
  it('should return good', (done) => {
     
    productService.getProducts()
                  .subscribe ( products => {
                    expect(products.length).toBe(2);
                  });

    let productsRequest = httpMock.expectOne('http://localhost:7070/api/products');
    productsRequest.flush([{id: 1}, {id: 2}]);                
 
    httpMock.verify();
  });

});
