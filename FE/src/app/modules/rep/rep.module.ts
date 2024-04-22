import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepRoutingModule } from './rep-routing.module';
import { RepComponent } from './page/rep/rep.component';
import { CardModule } from "../../theme/shared/components/card/card.module";


@NgModule({
    declarations: [
        RepComponent
    ],
    imports: [
        CommonModule,
        RepRoutingModule,
        CardModule
    ]
})
export class RepModule { }
