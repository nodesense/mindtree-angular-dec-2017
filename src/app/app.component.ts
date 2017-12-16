import {Component, OnInit} from '@angular/core';
import { setTimeout } from 'timers';

//meta data
//reflection
@Component ({
    //1. component html tag name
    selector: 'app-root',

    //2. view/template html
    templateUrl: 'app.component.html',

    //3. styles/scopped styles NOT Global styles
    styleUrls: [
        'app.component.css'
    ]
})
//4. Type script class
export class AppComponent implements OnInit {
    title: string;

    currentYear: number = 2017;

    constructor() {
        this.title = 'Product';
    }

    //life cycle method, called after view
    //is loaded
    //keyword
    ngOnInit() {
        console.log("app init");

        setTimeout( () => {
            this.title = "Product app";
            this.currentYear += 2;
        }, 4000);

        // let that = this;
        // setTimeout(function() {
        //     console.log("set timeout");
        //     that.title = "PRoduct App";
        // }, 3000);
    }

    //to be called by child comp
    onContactUs(msg: string) {
        alert("Contact from child " + msg);
    }
}