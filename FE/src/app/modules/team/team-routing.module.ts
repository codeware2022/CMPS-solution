import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBrandCoordinatorComponent } from './page/brand-coordinator/add-brand-coordinator/add-brand-coordinator.component';
import { ViewBrandCoordinatorComponent } from './page/brand-coordinator/view-brand-coordinator/view-brand-coordinator.component';
import { AddBrandManagerComponent } from './page/brand-manager/add-brand-manager/add-brand-manager.component';
import { ViewBrandManagerComponent } from './page/brand-manager/view-brand-manager/view-brand-manager.component';
import { AddMarketingAdminComponent } from './page/marketing-admin/add-marketing-admin/add-marketing-admin.component';
import { ViewMarketingAdminComponent } from './page/marketing-admin/view-marketing-admin/view-marketing-admin.component';
import { AddMedicalRepComponent } from './page/medical-rep/add-medical-rep/add-medical-rep.component';
import { ViewMedicalRepComponent } from './page/medical-rep/view-medical-rep/view-medical-rep.component';
import { AddSalesRepComponent } from './page/sales-rep/add-sales-rep/add-sales-rep.component';
import { ViewSalesRepComponent } from './page/sales-rep/view-sales-rep/view-sales-rep.component';

const routes: Routes = [
  {
    path:'add-brandmanager',
    pathMatch:'full',
    component: AddBrandManagerComponent
  },
  {
    path:'view-brandmanager',
    pathMatch:'full',
    component: ViewBrandManagerComponent
  },
  {
    path:'add-brandcoordinator',
    pathMatch:'full',
    component:AddBrandCoordinatorComponent
  },
  {
    path:'view-brandcoordinator',
    pathMatch:'full',
    component:ViewBrandCoordinatorComponent
  },
  {
    path:'add-medicalrep',
    pathMatch:'full',
    component:AddMedicalRepComponent
  },
  {
    path:'view-medicalrep',
    pathMatch:'full',
    component:ViewMedicalRepComponent
  },
  {
    path:'add-salesrep',
    pathMatch:'full',
    component:AddSalesRepComponent
  },
  {
    path:'view-salesrep',
    pathMatch:'full',
    component:ViewSalesRepComponent
  },
  {
    path:'add-marketing-admin',
    pathMatch:'full',
    component:AddMarketingAdminComponent
  },
  {
    path:'view-marketing-admin',
    pathMatch:'full',
    component:ViewMarketingAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
