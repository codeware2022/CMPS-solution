import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'src/app/theme/shared/components';

import { OurProductsRoutingModule } from './our-products-routing.module';
import { AddOurProductComponent } from './page/add-our-product/add-our-product.component';
import { ViewOurProductComponent } from './page/view-our-product/view-our-product.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { IngredientsTableComponent } from './page/ingredients-table/ingredients-table.component';

@NgModule({
  declarations: [
    AddOurProductComponent,
    ViewOurProductComponent,
    IngredientsTableComponent
  ],
  imports: [
    CommonModule,
    OurProductsRoutingModule,
    CardModule,
    SharedModule,
  ]
})
export class OurProductsModule { }
