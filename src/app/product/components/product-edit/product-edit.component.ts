import { Component, OnInit } from '@angular/core';

//read dynamic url params /:id
import {ActivatedRoute,

        Router, //programatically navigate
} 
      from '@angular/router';
import { Product } from '../../models/product';
import { Brand } from '../../models/brand';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  //binded - two way binding
  product: Product = new Product();
  brands: Brand[] = [];


  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService
  ) {

  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    if (id) { //edit
      console.log("ID ", id);
      this.productService.getProduct(id)
      .subscribe ( product => {
        this.product = product;
      });
    }

    this.productService.getBrands()
    .subscribe ( brands => {
      this.brands = brands;
    });
  }

  gotoHome() {
    //go to home page
    this.router.navigateByUrl("/");
  }

  //called when save button clicked
  saveProduct() {
    /*
        Client sends data to server
               data
        client --> server
              update db
        server ---> db
              updated data
        server ----> client

    */
    this.productService
          .saveProduct(this.product)
          .subscribe (savedProduct => {
              //option 1 continue with form
              //update local data from server
              this.product =savedProduct;
          });
  }

}
