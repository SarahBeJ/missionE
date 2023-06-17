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
  
  constructor(private router: Router, private service: LoginServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  loginNow(): void {
    this.service.login(this.user).subscribe((data) => {
      this.message = data;
      //console.log(data.token)
      localStorage.setItem('token',data.token);
      this.service.parseJwt();
      })
    };
}