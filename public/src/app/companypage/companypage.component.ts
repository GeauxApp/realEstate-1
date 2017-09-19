import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-companypage',
  templateUrl: './companypage.component.html',
  styleUrls: ['./companypage.component.css'], providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})
export class CompanypageComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 8000;
    config.wrap = false;
    config.keyboard = false;

  }
  ngOnInit() {
  }


}
