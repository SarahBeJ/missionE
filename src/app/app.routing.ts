import { CommonModule, } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { PublicationListComponent } from './publication-list/publication-list.component';
import { CreatePublicationComponent } from './create-publication/create-publication.component';
import { UpdatePublicationComponent } from './update-publication/update-publication.component';
import { PublicationDetailsComponent } from './publication-details/publication-details.component';

const routes: Routes =[
    { path: 'user-profile/:id',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'post',          component: PostsComponent },
    {path: 'publications', component: PublicationListComponent},
    {path: 'create-publication', component: CreatePublicationComponent},
    {path: 'update-publication/:idPublication', component: UpdatePublicationComponent},
    {path: 'publication-details/:idPublication', component: PublicationDetailsComponent},
    { path: '', redirectTo: 'landing', pathMatch: 'full' }
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
