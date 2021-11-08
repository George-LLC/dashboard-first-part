import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration-step2',
  templateUrl: './registration-step2.component.html',
  styleUrls: ['./registration-step2.component.scss']
})
export class RegistrationStep2Component implements OnInit {

  register: any;

  constructor() { }

  ngOnInit(): void {
    this.register = new FormGroup({
      name: new FormControl('', [Validators.required]),
      businessName: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      industry: new FormControl('', [Validators.required])
    })
  }

}
