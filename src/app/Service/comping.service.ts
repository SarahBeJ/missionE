import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Comping } from '../models/comping';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompingService {

  private apiUrl = 'http://localhost:9001/comping';

  
  constructor(private http: HttpClient, private router: Router) { }
  


public addComping(comping : Comping ): Observable<Comping>{
  return this.http.post<Comping>(this.apiUrl, comping);

  }
  getCompingList() :Observable<Comping[]> {
    return this.http.get<Comping[]>(this.apiUrl);
  }
}
