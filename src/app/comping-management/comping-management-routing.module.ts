import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompingComponent } from './add-comping/add-comping.component';
import { CompingListComponent } from './comping-list/comping-list.component';

const routes: Routes =[
  { path: 'add',     component: AddCompingComponent },
  { path: 'list',     component: CompingListComponent },
  { path: '', redirectTo: 'landing', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompingManagementRoutingModule { }
