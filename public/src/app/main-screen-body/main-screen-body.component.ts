import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-main-screen-body',
    templateUrl: './main-screen-body.component.html',
    styleUrls: ['./main-screen-body.component.css'],
    providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})
export class MainScreenBodyComponent implements OnInit {

    constructor(config: NgbCarouselConfig) {
        // customize default values of carousels used by this component tree
        config.interval = 8000;
        config.wrap = false;
        config.keyboard = false;
    }

    ngOnInit() {
    }

}
