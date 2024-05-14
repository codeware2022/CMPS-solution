import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductMasterComponent } from './page/product-master/product-master.component';
import { CardModule } from 'src/app/theme/shared/components';
import { TypeheadInputComponent } from 'src/app/theme/shared/components/typehead-input/typehead-input.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { AddProductComponent } from './page/add-product/add-product.component';


@NgModule({
  declarations: [
    ProductMasterComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CardModule,

    SharedModule
  ]
})
export class ProductsModule { }
