import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';

import {BrowserModule} 
    from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

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
