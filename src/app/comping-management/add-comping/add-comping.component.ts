import { LoginServiceService } from 'src/app/Service/login-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userType } from 'src/app/models/user.type';
import { user } from 'src/app/models/user';
import { Comping } from 'src/app/models/comping';
import { CompingService } from 'src/app/Service/comping.service';

@Component({
  selector: 'app-add-comping',
  templateUrl: './add-comping.component.html',
  styleUrls: ['./add-comping.component.css']
})
export class AddCompingComponent implements OnInit {

  comping: Comping= new Comping();
  message:any;
  owner: any = userType.Owner;
  client: any= userType.Client;
  admin : any=userType.Admin;
  drivers : user[]= [];
  
  constructor(public router: Router,private compingService:CompingService) { }

  ngOnInit(): void {

    let driver1 = new user();
    driver1.firstName = "Mohamed"
    driver1.familyName = "Derwich"

    let driver2 = new user();
    driver2.firstName = "Marwen"
    driver2.familyName = "Bel haj"

    let driver3 = new user();
    driver3.firstName = "Faker"
    driver3.familyName = "Haj ali"

    let driver4 = new user();
    driver4.firstName = "Selim"
    driver4.familyName = "ben mansour"

    this.drivers.push(driver1,driver2,driver3,driver4);
  }
  public add(){
    this.compingService.addComping(this.comping).subscribe(
      data => {
        if(data != null) this.router.navigate(['/list']);
      }
    )
  
  }

}
