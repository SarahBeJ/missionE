import { Component, OnInit } from '@angular/core';
import { Publication } from '../publication';
import { Router } from '@angular/router';
import { PublicationService } from '../publication.service';
// all modules

// one by one
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Block } from 'notiflix/build/notiflix-block-aio';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-create-publication',
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.css']
})
export class CreatePublicationComponent implements OnInit {
  publication : Publication = new Publication();
  constructor(private publicationService: PublicationService, private router  : Router) { }

  ngOnInit(): void {
  }
  savePublication(){
    
    this.publicationService.createPublication(this.publication).subscribe( data =>{
      console.log("data");
      this.goToPublicationList();
      Notiflix.Notify.success('post add successfully',  {
        ID: 'MKA',
        timeout: 2500,
        showOnlyTheLastOne: true,
        });

    },
    error => console.log(error));
  }

  goToPublicationList(){
    this.router.navigate(['/publications']);
  }
  onSubmit(){
    console.log(this.publication);
    this.savePublication();
  }

}
