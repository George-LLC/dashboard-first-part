import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import {MainLayoutComponent} from "./layout/main-layout/main-layout.components";
import {AuthLayoutComponent} from "./layout/auth-layout/auth-layout.component";
import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";
import {DashboardComponent} from "./modules/dashboard/pages/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () => import('src/app/modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('src/app/modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'message',
        loadChildren: () => import('src/app/modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'networks',
        loadChildren: () => import('src/app/modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'account',
        loadChildren: () => import('src/app/modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },

  // {
  //   path: 'message',
  //   component: MainLayoutComponent
  // },
  // {
  //   path: 'networks',
  //   component: MainLayoutComponent
  // },
  // {
  //   path: 'account',
  //   component: MainLayoutComponent
  // },
  {
    path: '**',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
