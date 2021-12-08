import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {CartComponent} from "./cart/cart.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent

  },
  {
    path: 'products',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./catalog/catalog.module')
            .then(mod => mod.CatalogModule)
      },
      {
        path:':id',
        loadChildren: () =>
          import('./catalog/product-page/product-page.module')
            .then(mod => mod.ProductPageModule)
      }
    ]
  },
  {
    path: 'cart',
    component: CartComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
