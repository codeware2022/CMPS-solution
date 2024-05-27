import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from "../../theme/shared/components/card/card.module";

import { OtherRoutingModule } from './other-routing.module';
import { DistributorComponent } from './distributor/distributor.component';
import { AreaComponent } from './area/area.component';
import { RangeComponent } from './range/range.component';
import { ZoneComponent } from './zone/zone.component';


@NgModule({
  declarations: [
    DistributorComponent,
    AreaComponent,
    RangeComponent,
    ZoneComponent
  ],
  imports: [
    CommonModule,
    OtherRoutingModule,
    CardModule
  ]
})
export class OtherModule { }
