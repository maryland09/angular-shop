import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";

import { MainMenuComponent } from './main/main-menu.component';
import { HomePageComponent } from './home-page/home-page.component';
import {MatCardModule} from "@angular/material/card";

import { HttpClientModule } from '@angular/common/http';
import {CartComponent} from "./cart/cart.component";
import {MatDividerModule} from "@angular/material/divider";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatBadgeModule} from "@angular/material/badge";




@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomePageComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatDividerModule,
    MatGridListModule,
    MatBadgeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
