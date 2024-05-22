import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandManagerComponent } from './page/brand-manager/brand-manager.component';
import { BrandCoordinatorComponent } from './page/brand-coordinator/brand-coordinator.component';
import { MedicalRepComponent } from './page/medical-rep/medical-rep.component';
import { SalesRepComponent } from './page/sales-rep/sales-rep.component';
import { MarketingAdminComponent } from './page/marketing-admin/marketing-admin.component';

const routes: Routes = [
  {
    path:'brandmanager',
    pathMatch:'full',
    component: BrandManagerComponent
  },
  {
    path:'brandcoordinator',
    pathMatch:'full',
    component:BrandCoordinatorComponent
  },
  {
    path:'medicalrep',
    pathMatch:'full',
    component:MedicalRepComponent
  },
  {
    path:'salesrep',
    pathMatch:'full',
    component:SalesRepComponent
  },
  {
    path:'marketingadmin',
    pathMatch:'full',
    component:MarketingAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
