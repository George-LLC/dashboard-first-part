import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./main-layout/main-layout.component";

const routes: Routes = [
  // {
  //   path: '',
  //   components: MainLayoutComponent,
  //   children: [
  //     { path: 'dashboard', loadChildren: '' }
  //   ]
  // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
