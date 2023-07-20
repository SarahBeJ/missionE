import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompingService } from 'src/app/Service/comping.service';
import { Comping } from 'src/app/models/comping';
import { user } from 'src/app/models/user';

@Component({
  selector: 'app-comping-list',
  templateUrl: './comping-list.component.html',
  styleUrls: ['./comping-list.component.css']
})
export class CompingListComponent implements OnInit {

  compingList : Comping[] = [];
  constructor(private compingService: CompingService, public router: Router) { }

  ngOnInit(): void {
    //dynamic
    this.getCompinList();
    //static
    let driver1 = new user();
    driver1.firstName = "Mohamed"
    driver1.familyName = "Derwich"

    let driver2 = new user();
    driver2.firstName = "Marwen"
    driver2.familyName = "Bel haj"

    let comping = new Comping();
    comping.driver = driver1;
    comping.duration = 2;
    comping.placeNumber = 15;
    comping.start = new Date();
    comping.end = new Date(comping.start.getDate() + comping.duration)

    let comping1 = new Comping();
    comping1.driver = driver2;
    comping1.duration = 4;
    comping1.placeNumber = 30;
    comping1.start = new Date();
    comping1.end = new Date(comping.start.getDate() + comping.duration)
    this.compingList.push(comping, comping1)
  }

  getCompinList(){
    this.compingService.getCompingList().subscribe(
      data => {this.compingList = data;},
      error => {console.log(error);}
    )

  }

}
