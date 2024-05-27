import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
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
import { CardModule } from 'src/app/theme/shared/components';


@NgModule({
  declarations: [        
    AddBrandCoordinatorComponent,
    ViewBrandCoordinatorComponent,
    AddBrandManagerComponent,
    ViewBrandManagerComponent,
    AddMarketingAdminComponent,
    ViewMarketingAdminComponent,
    AddMedicalRepComponent,
    ViewMedicalRepComponent,
    AddSalesRepComponent,
    ViewSalesRepComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    CardModule
    
  ]
})
export class TeamModule { }
