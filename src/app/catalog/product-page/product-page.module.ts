import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';
import {ProductPageRoutingModule} from "./product-page-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    ProductPageRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule
  ],
  exports:[ProductPageComponent]
})
export class ProductPageModule { }
