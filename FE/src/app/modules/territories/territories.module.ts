import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerritoriesRoutingModule } from './territories-routing.module';
import { CardModule } from 'src/app/theme/shared/components/card/card.module';
import { AddDistributorComponent } from './page/distributor/add-distributor/add-distributor.component';
import { ViewDistributorComponent } from './page/distributor/view-distributor/view-distributor.component';
import { AddAreaComponent } from './page/area/add-area/add-area.component';
import { ViewAreaComponent } from './page/area/view-area/view-area.component';
import { AddRangeComponent } from './page/range/add-range/add-range.component';
import { ViewRangeComponent } from './page/range/view-range/view-range.component';
import { AddZoneComponent } from './page/zone/add-zone/add-zone.component';
import { ViewZoneComponent } from './page/zone/view-zone/view-zone.component';

@NgModule({
  declarations: [   
    AddDistributorComponent, 
    ViewDistributorComponent, AddAreaComponent, ViewAreaComponent, AddRangeComponent, ViewRangeComponent, AddZoneComponent, ViewZoneComponent
  ],
  imports: [
    CommonModule,
    TerritoriesRoutingModule,
    CardModule,   
  ]
})
export class TerritoriesModule { }
