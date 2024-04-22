import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductMasterComponent } from './page/product-master/product-master.component';
import { CardModule } from 'src/app/theme/shared/components';
import { TypeheadInputComponent } from 'src/app/theme/shared/components/typehead-input/typehead-input.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';


@NgModule({
  declarations: [
    ProductMasterComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CardModule,

    SharedModule
  ]
})
export class ProductsModule { }
