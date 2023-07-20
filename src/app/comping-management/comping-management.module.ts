import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompingManagementRoutingModule } from './comping-management-routing.module';
import { AddCompingComponent } from './add-comping/add-comping.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompingListComponent } from './comping-list/comping-list.component';


@NgModule({
  declarations: [
    AddCompingComponent,
    CompingListComponent
  ],
  imports: [
    CommonModule,
    CompingManagementRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ]
})
export class CompingManagementModule { }
