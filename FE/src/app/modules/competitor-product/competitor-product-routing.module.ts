import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompetitorProductComponent } from './page/add-competitor-product/add-competitor-product.component';
import { viewport } from '@popperjs/core';
import { ViewCompetitorProductComponent } from './page/view-competitor-product/view-competitor-product.component';

const routes: Routes = [
  {
    path:'add',
    pathMatch:'full',
    component:AddCompetitorProductComponent
  },
  {
    path:'view',
    pathMatch:'full',
    component:ViewCompetitorProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetitorProductRoutingModule { }
