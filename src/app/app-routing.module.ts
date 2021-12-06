import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {MainMenuComponent} from "./main/main-menu.component";
import {HomePageComponent} from "./home-page/home-page.component";


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
    // redirectTo: 'catalog',
    // pathMatch:'full'
  },

  // {
  //   path: 'register',
  //   component: RegisterComponent
  // },
  // {
  //   path: 'order-register',
  //   component: OrderRegisterComponent
  // },
  // {
  //   path: 'products',
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () =>
  //         import('./catalog/catalog.module')
  //           .then(mod => mod.CatalogModule)
  //     },
  //
  //     {
  //       path:':id',
  //       canLoad: [ProductGuard],
  //       loadChildren: () =>
  //         import('./product-page/product-page.module')
  //           .then(mod => mod.ProductPageModule)
  //     }
  //
  //
  //   ]
  // },

  //
  // {
  //   path:'error',
  //   component: ErrorPageComponent
  // },

  {
    path: '**',
    redirectTo: 'error'
  }

]

export const options: ExtraOptions = {
  enableTracing: false,
  scrollPositionRestoration: "enabled",
  // preloadingStrategy: PreloadAllModules
}





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
