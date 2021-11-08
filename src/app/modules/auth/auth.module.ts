import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import {SharedModule} from "../../shared/shared.module";
import { RegistrationStep1Component } from './pages/register/registration-step1/registration-step1.component';
import { RegistrationStep2Component } from './pages/register/registration-step2/registration-step2.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RegistrationStep1Component,
    RegistrationStep2Component
  ],
  imports: [
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
