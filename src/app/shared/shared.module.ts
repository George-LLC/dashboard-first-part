import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ControlMessagesComponent } from './components/control-messages/control-messages.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';



@NgModule({
  declarations: [
    ControlMessagesComponent,
    ProgressBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    ControlMessagesComponent,
    ProgressBarComponent,

    FlexLayoutModule
  ]
})
export class SharedModule { }
