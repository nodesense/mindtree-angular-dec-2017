import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';

import {BrowserModule} 
    from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

//logical collection
//components
//directives, pipes, services
@NgModule({
    //module dependencies
    imports: [
        BrowserModule
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
