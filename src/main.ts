//bootstrap
//loading angular app into browser

//from node_modules
//bundled as vendor.bundle.js
import {platformBrowserDynamic} 
    from "@angular/platform-browser-dynamic";

//from project
//bundled as main.bundle.js
import { AppModule } from "./app/app.module";

 //JIT Compilation
platformBrowserDynamic()
    .bootstrapModule(AppModule);