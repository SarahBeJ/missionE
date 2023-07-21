import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../Service/login-service.service';
import { user } from '../models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users : user[];
  user: user= new user();
  message:any;
  isPopupOpen = false;

  
  constructor(private service : LoginServiceService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe((data)=>this.users=data);

  }

  ajouter(){
    let resp = this.service.register(this.user);
    resp.subscribe((data) => {
      this.message = data;
      localStorage.setItem('loggedIn','true');
      localStorage.setItem('currentUserId', this.user.idUser.toString());

    });
  }
  togglePopup(): void {
    this.isPopupOpen = !this.isPopupOpen;
  }

}
