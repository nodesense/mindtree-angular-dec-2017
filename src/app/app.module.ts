import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';

import {BrowserModule} 
    from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { SharedModule } from './shared/shared.module';

import {RouterModule, Routes} 
                from "@angular/router";

import { ProductModule } from './product/product.module';

import {LocationStrategy,
        HashLocationStrategy} from '@angular/common';
import { AuthModule } from './auth/auth.module';

import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth/guards/auth.guard';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


//route configuration
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'contact',
        component: ContactComponent
    },

   // dynamic module loading
    {

        path: 'products',
       canActivate: [AuthGuard],
        //path to module
        loadChildren: 'app/product/product.module#ProductModule'
    }
];

//logical collection
//components
//directives, pipes, services
@NgModule({
    //module dependencies
    imports: [
        BrowserModule,
        SharedModule,

        HttpClientModule,

        //apply route config to angular
        //forRoot create a module
        RouterModule.forRoot(routes),
        AuthModule,
        ProductModule,
        BsDatepickerModule.forRoot()
    ],

    //all components, pipes, directives
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        ContactComponent,
        AboutComponent,
        //HomeComponent,
        //HeaderComponent
        ///...100
    ],

    //bootstrap 
    bootstrap: [
        AppComponent
    ],

    providers: [
        //for Enabling hash based routing

        // {
        //     provide: LocationStrategy, 
        //     useClass: HashLocationStrategy
        // }
 
    ]

})
export class AppModule {

}
