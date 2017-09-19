import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
//import { Router } from "@angular/router";
import 'rxjs/add/operator/toPromise';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { SignupService } from '../services/signup.service';


@Component({
  selector: 'main-screen-top',
  templateUrl: './main-screen-top.component.html',
  styleUrls: ['./main-screen-top.component.css']
})
export class MainScreenTopComponent implements OnInit {

  closeResult: string;

  constructor(private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  ngOnInit() {
  }

}

