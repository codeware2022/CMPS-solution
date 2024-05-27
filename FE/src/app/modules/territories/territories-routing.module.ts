import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDistributorComponent } from './page/distributor/add-distributor/add-distributor.component';
import { ViewDistributorComponent } from './page/distributor/view-distributor/view-distributor.component';
import { AddAreaComponent } from './page/area/add-area/add-area.component';
import { ViewAreaComponent } from './page/area/view-area/view-area.component';
import { AddRangeComponent } from './page/range/add-range/add-range.component';
import { ViewRangeComponent } from './page/range/view-range/view-range.component';
import { AddZoneComponent } from './page/zone/add-zone/add-zone.component';
import { ViewZoneComponent } from './page/zone/view-zone/view-zone.component';



const routes: Routes = [ 
  {
    path:'add-distributor',
    pathMatch:'full',
    component:AddDistributorComponent
  },
  {
    path:'view-distributor',
    pathMatch:'full',
    component:ViewDistributorComponent
  },  
  {
    path:'add-area',
    pathMatch:'full',
    component:AddAreaComponent
  },  
  {
    path:'view-area',
    pathMatch:'full',
    component:ViewAreaComponent
  },  
  {
    path:'add-range',
    pathMatch:'full',
    component:AddRangeComponent
  },  
  {
    path:'view-range',
    pathMatch:'full',
    component:ViewRangeComponent
  },  
  {
    path:'add-zone',
    pathMatch:'full',
    component:AddZoneComponent
  },  
  {
    path:'view-zone',
    pathMatch:'full',
    component:ViewZoneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerritoriesRoutingModule { }
