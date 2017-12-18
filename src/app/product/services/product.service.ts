import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export abstract class ProductService {

  constructor() { }

  abstract getProducts():Observable<Product[]>;
}

//concrete class, create object
@Injectable() 
export class ProductWebService 
                  extends ProductService {

  //injecting httpclient into product service
  constructor(private httpClient: HttpClient) {
    super(); //call base cons
  }

  getProducts(): Observable<Product[]> {
     //es6 template reference variable, back quote, ${}
     //GET /api/products
     return this.httpClient
            .get<Product[]> (`${environment.apiEndPoint}/api/products`)
  }
}