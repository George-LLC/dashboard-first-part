import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
// import {RegisterComponent} from "./pages/register/register.component";
import {RegistrationStep1Component} from "./pages/register/registration-step1/registration-step1.component";
import {RegistrationStep2Component} from "./pages/register/registration-step2/registration-step2.component";
import {RegisterComponent} from "./pages/register/register.component";
// import {LoginComponent} from "@modules/auth/pages/login/login.components";
// import {RegisterComponent} from "@modules/auth/pages/register/register.components";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registration-step1',
        component: RegistrationStep1Component
      },
      {
        path: 'registration-step2',
        component: RegistrationStep2Component
      }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
