import { Component, OnInit } from '@angular/core';
import { Publication } from '../publication';
import { Router } from '@angular/router';
import { PublicationService } from '../publication.service';


@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent implements OnInit {

  publications !: Publication [];


  constructor(private publicationService: PublicationService, private router: Router) { }

  ngOnInit(): void {
    this.getPublications();
  }

  private getPublications(){
    this.publicationService.getPublicationsList().subscribe(data => {
      this.publications = data;
    });
  }
  updatePublication(idPublication: number){
    this.router.navigate(['update-publication', idPublication]);
  }
  deletePublication(idPublication: number){
    this.publicationService.deletePublication(idPublication).subscribe( data => {
      console.log(data);
      this.getPublications();
    })
  }
  publicationDetails(idPublication : number){
    this.router.navigate(['publication-details', idPublication]);
  }




}
