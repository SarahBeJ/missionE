import { Location, PopStateEvent } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Service/login-service.service';
import { user } from 'src/app/models/user';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    
})
export class NavbarComponent implements OnInit {
    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];
    user:user;

    constructor(public location: Location, private router: Router , private service: LoginServiceService) {
    }

    ngOnInit() {
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;
        if (event instanceof NavigationStart) {
           if (event.url != this.lastPoppedUrl)
               this.yScrollStack.push(window.scrollY);
       } else if (event instanceof NavigationEnd) {
           if (event.url == this.lastPoppedUrl) {
               this.lastPoppedUrl = undefined;
               window.scrollTo(0, this.yScrollStack.pop());
           } else
               window.scrollTo(0, 0);
       }
     });
     this.location.subscribe((ev:PopStateEvent) => {
         this.lastPoppedUrl = ev.url;
     });
    }

    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if( titlee === '#/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if( titlee === '#/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }
    deconnexion() {
        this.service.getUserById(localStorage.getItem('idUser')).subscribe((data)=>
        this.user=data);
        if(this.service.login(this.user)){
        localStorage.removeItem('idUser');
        localStorage.removeItem('token');
        localStorage.removeItem('LoggedIn');

        }
    }
    showProfil():boolean{
      if(localStorage.getItem('LoggedIn')=='true'){
        return true;
      }else{
        return false;
      }
    }
    profil(){
       return localStorage.getItem('idUser');
    }
}
