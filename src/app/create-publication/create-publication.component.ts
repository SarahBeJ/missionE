import { Component, OnInit } from '@angular/core';
import { Publication } from '../publication';
import { Router } from '@angular/router';
import { PublicationService } from '../publication.service';

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
      console.log(data);
      this.goToPublicationList();
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
