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

//route configuration
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
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

        //apply route config to angular
        //forRoot create a module
        RouterModule.forRoot(routes)
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
    ]

})
export class AppModule {

}
