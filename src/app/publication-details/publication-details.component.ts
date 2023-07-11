import { Component, OnInit } from '@angular/core';
import { Publication } from '../publication';
import { ActivatedRoute } from '@angular/router';
import { PublicationService } from '../publication.service';

@Component({
  selector: 'app-publication-details',
  templateUrl: './publication-details.component.html',
  styleUrls: ['./publication-details.component.css']
})
export class PublicationDetailsComponent implements OnInit {

  idPublication !: number
  publication !: Publication
  constructor(private route: ActivatedRoute, private publicationService: PublicationService) { }

  ngOnInit(): void {
    this.idPublication = this.route.snapshot.params['idPublication'];

    this.publication = new Publication();
    this.publicationService.getPublicationById(this.idPublication).subscribe( data => {
      this.publication = data;
    });
  }
}
