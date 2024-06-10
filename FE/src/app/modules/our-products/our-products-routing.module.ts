import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOurProductComponent } from './page/add-our-product/add-our-product.component';
import { ViewOurProductComponent } from './page/view-our-product/view-our-product.component';
import { OurProductProfileComponent } from './page/our-product-profile/our-product-profile.component';

const routes: Routes = [
  {
    path:'add',
    pathMatch:'full',
    component:AddOurProductComponent
  },
  {
    path:'view',
    pathMatch:'full',
    component:ViewOurProductComponent
  },
  {
    path:'our-product-profile',
    pathMatch:'full',
    component:OurProductProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurProductsRoutingModule { }
