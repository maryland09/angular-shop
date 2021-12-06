import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import {CatalogRoutingModule} from "./catalog-routing.module";
import {CardModule} from "./card/card.module";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    CatalogComponent,

  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    CardModule,
    MatButtonModule,
    MatCardModule

  ],
  exports:[CatalogComponent]
})
export class CatalogModule { }
