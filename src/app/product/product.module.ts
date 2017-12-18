import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { FilterPipe } from './pipes/filter.pipe';

//route configuration
import {RouterModule, Routes} from "@angular/router";

import {FormsModule} from '@angular/forms';
//from Angular 4.3 onwards
import {HttpClientModule} 
    from '@angular/common/http';
import { ProductService, ProductWebService } from './services/product.service';

const routes: Routes = [
  {
    path: 'products',
    component: ProductHomeComponent,

    //nested routing
    children: [
     {
       path: 'list', //  /products/list
       component: ProductListComponent
     },
     {
       path: 'create',
       component: ProductEditComponent
     },
     {
       path: 'edit/:id', //products/edit/1234556
       component: ProductEditComponent
     },

     {
       path: 'search',
       component: ProductSearchComponent
     }
    ]
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule
  ],
  declarations: [ProductHomeComponent, 
                 ProductListComponent, 
                 ProductEditComponent, 
                 ProductSearchComponent, 
                 FilterPipe],

  providers: [
    {
      provide: ProductService,  //base class/interface
      useClass: ProductWebService //concrete class to create
    }
  ]
})
export class ProductModule { }
