import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryMasterComponent } from './page/category-master/category-master.component';
import { CategoryCardComponent } from './page/category-card/category-card.component';


@NgModule({
  declarations: [
    CategoryMasterComponent,
    CategoryCardComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
