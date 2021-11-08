import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";
import {AuthLayoutComponent} from "./layout/auth-layout/auth-layout.component";

import {AuthModule} from "./modules/auth/auth.module";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {SidenavComponent} from "./layout/sidenav/sidenav.component";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    AuthLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent
  ],
  imports: [
    // angular
    BrowserModule,

    // core & shared
    CoreModule,
    SharedModule,

    // 3rd party
    AuthModule,

    // app
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
