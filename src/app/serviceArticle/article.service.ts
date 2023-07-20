import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../models/Article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {}

 addArticle(data:Article):Observable<Article>{
    return this.http.post<Article>('http://localhost:8080/commandes/api',data)
      }


  fetchArticle():Observable<Article[]>{
        return this.http.get<Article[]>(' http://localhost:8080/commandes/api/all')
      }

      getArticleById(id: any): Observable<Article> {
        return this.http.get<Article>('http://localhost:8080/commandes/api' +id)
      } 

   
 /*  addArticle(data:Article):Observable<Article>{
    return this.http.post<Article>('http://localhost:3000/article',data)
      }


  fetchArticle():Observable<Article[]>{
        return this.http.get<Article[]>('http://localhost:3000/article')
      }

      getArticleById(id: any): Observable<Article> {
        return this.http.get<Article>('http://localhost:3000/article' +id)
      }    */
}
