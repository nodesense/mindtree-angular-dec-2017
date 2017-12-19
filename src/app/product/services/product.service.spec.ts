import { TestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule, 
        HttpTestingController } from '@angular/common/http/testing';


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

 
  
  it('should return good response with data', (done) => {
     
   

    productService.getProducts()
                  .subscribe ( products => {
                    expect(products.length).toBe(2);
                    done();
                  });
                   

    let productsRequest = httpMock.expectOne('http://localhost:7070/api/products');
    
    

    productsRequest.flush([{id: 1}, {id: 2}]);                
 
                  

    httpMock.verify();
  });


  xit('should return good one product', (done) => {
     
    productService.getProduct(100)
                  .subscribe ( product => {
                    expect(product.id).toBe(100);
                    done();
                  });

    let productsRequest = httpMock.expectOne('http://localhost:7070/api/products/100');
    productsRequest.flush({id: 100});                
 
    httpMock.verify();
  });

});
