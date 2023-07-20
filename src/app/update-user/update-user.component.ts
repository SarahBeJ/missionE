import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from '../Service/login-service.service';
import { user } from '../models/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user: user= new user();

  constructor(private router : Router , private route : ActivatedRoute , private service : LoginServiceService) { }

  ngOnInit(): void {
    
    this.service.getUserById(this.route.snapshot.params['idt']).subscribe((data:user)=>
    this.user=data
    );}
    
    update(){
    this.service.updateUser(this.user.idUser,this.user).subscribe(
      (data) => {
        this.router.navigate(['/user-profil/'+data.idUser]);
      }
    )
  }

  
}
