import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ResourcesComponent } from './resources/resources.component';
import { LoginComponent } from './login/login.component';
import { ResourcesCardComponent } from './resources/resources-card/resources-card.component';
import { ResourcesGridComponent } from './resources/resources-grid/resources-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ResourcesComponent,
    LoginComponent,
    ResourcesCardComponent,
    ResourcesGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
