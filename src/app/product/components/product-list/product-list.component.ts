import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products: Product[] = [];

  subscription: Subscription;

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.fetchProducts();
 
  }

  trackByProduct(index: number, product: Product){
    //angular now track by product id
    return product.id;
  }

  
  fetchProducts() {
    console.log("fetchProducts begin");

    this.subscription = this.productService.getProducts()
    .subscribe ( products => {
      //callback
      this.products = products;
      console.log("got products ", products);
    });

    console.log("fetchProducts end");
  }

  ngOnDestroy() {
    //cancel pendings calls if any
    this.subscription.unsubscribe();
  }

}
