import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistributorComponent } from './distributor/distributor.component';
import { AreaComponent } from './area/area.component';
import { RangeComponent } from './range/range.component';
import { ZoneComponent } from './zone/zone.component';

const routes: Routes = [
  {
    path:'distributor',
    pathMatch:'full',
    component:DistributorComponent
  },
  {
    path:'area',
    pathMatch:'full',
    component:AreaComponent
  },
  {
    path:'range',
    pathMatch:'full',
    component:RangeComponent
  },
  {
    path:'zone',
    pathMatch:'full',
    component:ZoneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule { }
