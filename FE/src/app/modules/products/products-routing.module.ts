import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductMasterComponent } from './page/product-master/product-master.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductMasterComponent
  },

  {
    path: 'detail',
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
