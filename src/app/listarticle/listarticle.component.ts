import { Component, OnInit } from '@angular/core';
import { Article } from '../models/Article';
import { ArticleService } from '../serviceArticle/article.service';
import { Router } from '@angular/router';
import { CartService } from '../serviceCart/cart.service';

@Component({
  selector: 'app-listarticle',
  templateUrl: './listarticle.component.html',
  styleUrls: ['./listarticle.component.css']
})
export class ListarticleComponent implements OnInit {

 
  constructor(private AService :ArticleService,private router:Router,private cartService: CartService) { }
  listArticle !: Article[];
 
  ngOnInit(): void {
    this.getallArticles()
  }
  private getallArticles() {
    this.AService.fetchArticle().subscribe(
      data=>{
        this.listArticle=data;
      }
    )
  }

  article: any = {}; // Object to hold the product details


  addToCart() {
    this.cartService.addtoCart(this.article);
  }
}
