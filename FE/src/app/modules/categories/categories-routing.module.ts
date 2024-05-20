import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryMasterComponent } from './page/category-master/category-master.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CategoryMasterComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
