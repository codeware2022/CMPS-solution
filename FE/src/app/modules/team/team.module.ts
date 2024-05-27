import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from "../../theme/shared/components/card/card.module";

import { TeamRoutingModule } from './team-routing.module';
import { BrandManagerComponent } from './page/brand-manager/brand-manager.component';
import { BrandCoordinatorComponent } from './page/brand-coordinator/brand-coordinator.component';
import { MedicalRepComponent } from './page/medical-rep/medical-rep.component';
import { SalesRepComponent } from './page/sales-rep/sales-rep.component';
import { MarketingAdminComponent } from './page/marketing-admin/marketing-admin.component';


@NgModule({
  declarations: [
    BrandManagerComponent,
    BrandCoordinatorComponent,
    MedicalRepComponent,
    SalesRepComponent,
    MarketingAdminComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    CardModule
  ]
})
export class TeamModule { }
