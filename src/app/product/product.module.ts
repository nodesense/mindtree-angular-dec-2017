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
import { EditGuard } from './guards/edit.guard';
import { SaveAlertGuard } from './guards/save-alert.guard';

const routes: Routes = [
  {
    //path: 'products',

    //path is loaded from loadChildren
    //for dynamic loading of modules
    //app.module.ts loadChildren
    path: '',
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
       //edit/:name/:id
       path: 'edit/:id', //products/edit/1234556
       component: ProductEditComponent,
       //angualar shall call edit guard
       //before loading edit component
       canActivate: [EditGuard],

       //exit guard
       //called before unloading a component
       canDeactivate: [SaveAlertGuard]
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
   // HttpClientModule
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
    },

    EditGuard,
    SaveAlertGuard
  ]
})
export class ProductModule { }
