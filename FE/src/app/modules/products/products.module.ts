import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductMasterComponent } from './page/product-master/product-master.component';
import { CardModule } from 'src/app/theme/shared/components';
import { TypeheadInputComponent } from 'src/app/theme/shared/components/typehead-input/typehead-input.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { AddProductComponent } from './page/add-product/add-product.component';
import { ProductCardComponent } from './page/product-card/product-card.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { ProductCategoryIconComponent } from './page/product-category-icon/product-category-icon.component';
import { ProductsComparisonComponent } from './page/products-comparison/products-comparison.component';
import { CompetitorProductsComponent } from './page/competitor-products/competitor-products.component';
import { AddProductMasterCategoryComponent } from './page/add/add-product-master-category/add-product-master-category.component';
import { AddDosageFormComponent } from './page/add/add-dosage-form/add-dosage-form.component';
import { AddProductGenericComponent } from './page/add/add-product-generic/add-product-generic.component';
import { AddManufacturerComponent } from './page/add/add-manufacturer/add-manufacturer.component';
import { AddIngredientComponent } from './page/add/add-ingredient/add-ingredient.component';
import { AddMeasurementUnitsComponent } from './page/add/add-measurement-units/add-measurement-units.component';



@NgModule({
  declarations: [
    ProductMasterComponent,  
    AddProductComponent,
    ProductCardComponent,
    ProductDetailComponent,
    ProductCategoryIconComponent,
    ProductsComparisonComponent,
    CompetitorProductsComponent,
    AddProductMasterCategoryComponent,
    AddDosageFormComponent,
    AddProductGenericComponent,
    AddManufacturerComponent,
    AddIngredientComponent,
    AddMeasurementUnitsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CardModule,

    SharedModule
  ]
})
export class ProductsModule { }
