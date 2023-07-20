import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Publication } from './publication';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  private baseURL = "http://localhost:8075/api/v1/publications";

  constructor(private httpClient: HttpClient) { }

  getPublicationsList(): Observable<Publication[]>{
    return this.httpClient.get<Publication[]>(`${this.baseURL}`);
  }
  createPublication(publication : Publication): Observable<Object>{
    console.log("test")
    return this.httpClient.post(`${this.baseURL}`, publication);
  }
  getPublicationById(idPublication: number): Observable<Publication>{
    return this.httpClient.get<Publication>(`${this.baseURL}/${idPublication}`);
  }

  updatePublication(idPublication: number, publication : Publication): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${idPublication}`, publication);
  }
  deletePublication(idPublication: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idPublication}`);
  }

  searchByKeyword(endroit: string) {
    const url = `${this.baseURL}?endroit=${endroit}`;
    return this.httpClient.get(url);
  }
}
