import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BreadcrumbModule, CardModule } from './components';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { SpinnerComponent } from './components/spinner/spinner.component';

// bootstrap import
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TypeheadInputComponent } from './components/typehead-input/typehead-input.component';
import {
  NgTypeheadInputOptionTemplateDirective,
  NgTypeheadInputLabelTemplateDirective,
  NgSelectInputOptionTemplateDirective,
  NgSelectInputLabelTemplateDirective,
} from './directives/form-template.directive';
import { FilterPipe } from './Pipes/filter-pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SpinnerComponent,
    TypeheadInputComponent,
    NgTypeheadInputOptionTemplateDirective,
    NgTypeheadInputLabelTemplateDirective,
    NgSelectInputOptionTemplateDirective,
    NgSelectInputLabelTemplateDirective,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    BreadcrumbModule,
    NgbModule,
    NgScrollbarModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    BreadcrumbModule,
    SpinnerComponent,
    NgbModule,
    NgScrollbarModule,
    TypeheadInputComponent,
    FilterPipe,
    HttpClientModule
  ],
})
export class SharedModule { }
