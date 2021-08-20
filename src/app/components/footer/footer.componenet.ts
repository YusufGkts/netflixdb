import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'footer',
    templateUrl: 'footer.component.html'
})

export class FooterComponent implements OnInit {
    footer:any
    constructor() { }

    ngOnInit() { 
        this.footer='Footer'
    }
}