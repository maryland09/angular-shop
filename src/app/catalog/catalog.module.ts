import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import {CatalogRoutingModule} from "./catalog-routing.module";
import {CardModule} from "./card/card.module";



@NgModule({
  declarations: [
    CatalogComponent,

  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    CardModule

  ],
  exports:[CatalogComponent]
})
export class CatalogModule { }
