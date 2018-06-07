  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs/Observable';
  import { Product } from '../models/product';
  import { HttpClient } from '@angular/common/http';
  import { environment } from '../../../environments/environment';
  import { Brand } from '../models/brand';
 


  //Not advised to import all
  import "rxjs/Rx";
  
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
      console.log("END POINT ", environment.apiEndPoint);
      //es6 template reference variable, back quote, ${}
      //GET /api/products
      return this.httpClient
              .get<Product[]> (`${environment.apiEndPoint}/api/products`)
              .map ( products => {
                
                products = products.map (product => {
                  product.price = 1000;
                  return product;
                });
                
                
                return <Product[]> products;
              });
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

    //goal : brands to be cached
    //if brands found in cache, serve from cache

    //TAB based storage
    //session storage, each tab is a session
    //session data destroyed when tab closed
    //storage: Storage = window.sessionStorage;


    //Local Storage
    //Persistent
    //availble across tabs
    //availble on restart browser/system
    storage: Storage = window.localStorage;


    //GET /api/brands
    getBrands(): Observable<Brand[]> {
      //check if data is there in cache,
      //return from cache
      let json = this.storage.getItem("brands");
      if (json) { //data found
          let brands:Brand[] = JSON.parse(json);
           //convert brands array into 
           //observable of brands
           console.log("serving brands from cache");
          return Observable.of(brands);
      }



      console.log("cache not found, serving from server");

      //es6 template reference variable, back quote, ${}
      //GET /api/products
      return this.httpClient
            .get<Brand[]> (`${environment.apiEndPoint}/api/brands`)
            .map ( brands => {
              //update the storage
              console.log("updating brands in storage");

              let json = JSON.stringify(brands);
              this.storage.setItem("brands", json);

              return brands;
            })
  }


  }