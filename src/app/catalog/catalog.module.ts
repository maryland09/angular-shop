import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import {CatalogRoutingModule} from "./catalog-routing.module";
import {CardModule} from "./card/card.module";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {AppModule} from "../app.module";



@NgModule({
  declarations: [
    CatalogComponent,

  ],
    imports: [
        CommonModule,
        CatalogRoutingModule,
        CardModule,
        MatButtonModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,

    ],
  exports:[CatalogComponent]
})
export class CatalogModule { }
