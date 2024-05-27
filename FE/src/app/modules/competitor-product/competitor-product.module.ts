import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitorProductRoutingModule } from './competitor-product-routing.module';
import { CardModule } from 'src/app/theme/shared/components';
import { AddCompetitorProductComponent } from './page/add-competitor-product/add-competitor-product.component';
import { ViewCompetitorProductComponent } from './page/view-competitor-product/view-competitor-product.component';


@NgModule({
  declarations: [
    AddCompetitorProductComponent,
    ViewCompetitorProductComponent
  ],
  imports: [
    CommonModule,
    CompetitorProductRoutingModule,
    CardModule
  ]
})
export class CompetitorProductModule { }
