import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductMasterComponent } from './page/product-master/product-master.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { ProductsComparisonComponent } from './page/products-comparison/products-comparison.component';
import { AddDosageFormComponent } from './page/add/add-dosage-form/add-dosage-form.component';
import { AddIngredientComponent } from './page/add/add-ingredient/add-ingredient.component';
import { AddProductComponent } from './page/add-product/add-product.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductMasterComponent
  },
  {
    path: 'new',
    component: AddProductComponent
  },
  {
    path:'comparison',
    pathMatch:'full',
    component:ProductsComparisonComponent
  },
  {
    path:'dosageform',
    pathMatch:'full',
    component:AddDosageFormComponent
  },
  {
    path:'',
    pathMatch:'full',
    component:AddIngredientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
