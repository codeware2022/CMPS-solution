import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductMasterComponent } from './page/product-master/product-master.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { ProductsComparisonComponent } from './page/products-comparison/products-comparison.component';
import { AddDosageFormComponent } from './page/add/add-dosage-form/add-dosage-form.component';
import { AddIngredientComponent } from './page/add/add-ingredient/add-ingredient.component';
import { AddProductComponent } from './page/add-product/add-product.component';
import { AddManufacturerComponent } from './page/add/add-manufacturer/add-manufacturer.component';
import { AddMeasurementUnitsComponent } from './page/add/add-measurement-units/add-measurement-units.component';
import { AddProductGenericComponent } from './page/add/add-product-generic/add-product-generic.component';
import { AddSubTherapeuticCategoryComponent } from './page/add/add-sub-therapeutic-category/add-sub-therapeutic-category.component';
import { AddTherapeuticCategoryComponent } from './page/add/add-therapeutic-category/add-therapeutic-category.component';
import { AddProductMasterCategoryComponent } from './page/add/add-product-master-category/add-product-master-category.component';
import { TestComponent } from './page/test/test.component';

const routes: Routes = [
  {
    path: 'Test',
    pathMatch: 'full',
    component: TestComponent
  },
  {
    path:'new-therapeutic-category',
    pathMatch:'full',
    component:AddTherapeuticCategoryComponent
  },
  {
    path:'new-sub-therapeutic-category',
    pathMatch:'full',
    component:AddSubTherapeuticCategoryComponent
  },  
  {
    path:'new-product-master-category',
    pathMatch:'full',
    component:AddProductMasterCategoryComponent
  },
  {
    path: 'new-product',
    pathMatch:'full',
    component: AddProductComponent
  },
  {
    path:'new-product-generic',
    pathMatch:'full',
    component:AddProductGenericComponent
  },
  {
    path:'new-dosage-form',
    pathMatch:'full',
    component:AddDosageFormComponent
  },
  {
    path:'new-ingredient',
    pathMatch:'full',
    component:AddIngredientComponent
  },
  {
    path:'new-manufacturer',
    pathMatch:'full',
    component:AddManufacturerComponent
  },
  {
    path:' new-measurement-units',
    pathMatch:'full',
    component:AddMeasurementUnitsComponent
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
