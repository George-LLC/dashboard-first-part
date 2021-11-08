import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TopClientsComponent } from './components/top-clients/top-clients.component';
import { ChartLineComponent } from './components/chart-line/chart-line.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    DashboardComponent,
    TopClientsComponent,
    ChartLineComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
