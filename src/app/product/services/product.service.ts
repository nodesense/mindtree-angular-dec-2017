  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs/Observable';
  import { Product } from '../models/product';
  import { HttpClient } from '@angular/common/http';
  import { environment } from '../../../environments/environment';
  import { Brand } from '../models/brand';

  @Injectable()
  export abstract class ProductService {

    constructor() { }

    abstract getProducts():Observable<Product[]>;

    abstract getProduct(id: number): Observable<Product>;
    abstract deleteProduct(id: number): Observable<any>;

    //update existing
    //create new one
    abstract saveProduct(product: Product): Observable<Product>;


    abstract getBrands():Observable<Brand[]>;

  }

  //concrete class, create object
  @Injectable() 
  export class ProductWebService 
                    extends ProductService {

    //injecting httpclient into product service
    constructor(private httpClient: HttpClient) {
      super(); //call base cons
    }

    //GET /api/products
    getProducts(): Observable<Product[]> {
      //es6 template reference variable, back quote, ${}
      //GET /api/products
      return this.httpClient
              .get<Product[]> (`${environment.apiEndPoint}/api/products`)
    }

    //GET /api/products/12345
    getProduct(id: number): Observable<Product> {
      //es6 template reference variable, back quote, ${}
      //GET /api/products/12345
      return this.httpClient
            .get<Product> (`${environment.apiEndPoint}/api/products/${id}`)
  }

    //DELETE /api/products/12345
    deleteProduct(id: number): Observable<any> {
      //es6 template reference variable, back quote, ${}
      //DELETE /api/products/12345
      return this.httpClient
            .delete<any> (`${environment.apiEndPoint}/api/products/${id}`)
  }

    //Update existing => PUT /api/products/12345
    //   product as json

    //Create new one => POST /api/products
    //   product as json
    
    //return value is savedProduct
    saveProduct(product: Product): Observable<Product> {
      if (product.id) { //update, use put
        return this.httpClient
        .put<Product> (`${environment.apiEndPoint}/api/products/${product.id}`,
                      product
          );

      } else  { //create/use post
        return this.httpClient
        .post<Product> (`${environment.apiEndPoint}/api/products`,
                        product)

      }

    }


    //GET /api/brands
    getBrands(): Observable<Brand[]> {
      //es6 template reference variable, back quote, ${}
      //GET /api/products
      return this.httpClient
            .get<Brand[]> (`${environment.apiEndPoint}/api/brands`)
  }


  }