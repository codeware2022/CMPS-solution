import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductMasterComponent } from './page/product-master/product-master.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { ProductsComparisonComponent } from './page/products-comparison/products-comparison.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductMasterComponent
  },
  {
    path: 'detail',
    component: ProductDetailComponent
  },
  {
    path:'comparison',
    pathMatch:'full',
    component:ProductsComparisonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
