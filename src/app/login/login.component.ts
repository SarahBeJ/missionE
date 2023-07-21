import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from '../Service/login-service.service';
import { user } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: user = new user();
  message : any;
  id : any ;
  
  constructor(private router: Router, private service: LoginServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  loginNow(): void {
    this.service.login(this.user).subscribe((data) => {
      this.service.EmailUser(this.user.email).subscribe((dataa)=>{
        this.user = dataa ;
        localStorage.setItem('idUser',this.user.idUser.toString());
        localStorage.setItem('LoggedIn','true');



      });
      this.message = data;
      localStorage.setItem('token',data.token);
      this.service.parseJwt();


      })
    };
}