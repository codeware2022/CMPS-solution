import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOurProductComponent } from './page/add-our-product/add-our-product.component';
import { ViewOurProductComponent } from './page/view-our-product/view-our-product.component';
import { OurProductProfileComponent } from './page/our-product-profile/our-product-profile.component';
import { ProductProfileResolver } from 'src/app/data/resolvers/product-profile.resolver';

const routes: Routes = [
  {
    path: 'add',
    pathMatch: 'full',
    component: AddOurProductComponent,
  },
  {
    path: 'view',
    pathMatch: 'full',
    component: ViewOurProductComponent,        
  },
  {
    path: 'our-product-profile/:id',
    pathMatch: 'full',
    runGuardsAndResolvers: 'always',
    component: OurProductProfileComponent,
    resolve: {
      product: ProductProfileResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurProductsRoutingModule {}
