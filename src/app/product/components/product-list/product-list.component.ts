import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.fetchProducts();
  }

  
  fetchProducts() {
    console.log("fetchProducts begin");

    this.productService.getProducts()
    .subscribe ( products => {
      //callback
      this.products = products;
      console.log("got products ", products);
    });

    console.log("fetchProducts end");
  }

}
