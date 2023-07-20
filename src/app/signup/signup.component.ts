import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../Service/login-service.service';
import { user } from '../models/user';
import { userType } from '../models/user.type';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user: user= new user();
  message:any;
  owner: any = userType.Owner;
  client: any= userType.Client;
  admin : any=userType.Admin;
  
  constructor(public router: Router,private service:LoginServiceService) { }

  ngOnInit(): void {
  }
  public registerNow(){
    console.log('user', this.user);
 //   this.user.userType=UserType.Client;
    let resp = this.service.register(this.user);
    resp.subscribe((data) => {
      this.message = data;
      localStorage.setItem('loggedIn','true');
      localStorage.setItem('currentUserId', this.user.idUser.toString());

    });
  }
}
