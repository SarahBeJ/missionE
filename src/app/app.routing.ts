import { CommonModule, } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes =[
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'user-profile/:id', component: ProfileComponent },
    { path: 'register', component: SignupComponent },
    { path: 'landing', component: LandingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'UpdateUser/:idt', component: UpdateUserComponent },
    { path: 'admin', component: AdminComponent },


      {path: 'comping',
      loadChildren: () => import('./comping-management/comping-management.module').then(m => m.CompingManagementModule)
    },
  
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }