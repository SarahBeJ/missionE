import { Component, OnInit } from '@angular/core';
import { Publication } from '../publication';
import { PublicationService } from '../publication.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
@Component({
  selector: 'app-update-publication',
  templateUrl: './update-publication.component.html',
  styleUrls: ['./update-publication.component.css']
})
export class UpdatePublicationComponent implements OnInit {

  idPublication !: number;
  publication : Publication = new Publication();

  constructor(private publicationService: PublicationService,
    private route: ActivatedRoute,
    private router: Router) { }
    savePublication(){
      this.publicationService.createPublication(this.publication).subscribe( data =>{
        console.log(data);
        this.goToPublicationList();
        Notiflix.Notify.success('post updated successfully',  {
          ID: 'MKA',
          timeout: 2500,
          showOnlyTheLastOne: true,
          });
  
      },
      error => console.log(error));
    }

    ngOnInit(): void {
      this.idPublication = this.route.snapshot.params['idPublication'];

      this.publicationService.getPublicationById(this.idPublication).subscribe(data => {
        this.publication = data;
      }, error => console.log(error));
    }

    onSubmit(){
      this.publicationService.updatePublication(this.idPublication, this.publication).subscribe( data =>{
        this.goToPublicationList();
      }
      , error => console.log(error));
    }

    goToPublicationList(){
      this.router.navigate(['/publications']);
    }

}
