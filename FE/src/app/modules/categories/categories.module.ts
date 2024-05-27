import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryMasterComponent } from './page/category-master/category-master.component';
import { CategoryCardComponent } from './page/category-card/category-card.component';
import { AddTherapeuticCategoryComponent } from './page/add-therapeutic-category/add-therapeutic-category.component';
import { AddSubTherapeuticCategoryComponent } from './page/add-sub-therapeutic-category/add-sub-therapeutic-category.component';


@NgModule({
  declarations: [
    CategoryMasterComponent,
    CategoryCardComponent,
    AddTherapeuticCategoryComponent,
    AddSubTherapeuticCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
