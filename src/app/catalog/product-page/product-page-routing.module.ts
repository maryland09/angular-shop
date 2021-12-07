import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductPageComponent} from "./product-page.component";

export const routes: Routes = [
  {
    path:'',
    component: ProductPageComponent,
  }
]


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  providers: []
})
export class ProductPageRoutingModule { }
