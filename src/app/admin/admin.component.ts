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
  constructor(private service : LoginServiceService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe((data)=>this.users=data);

  }

}
