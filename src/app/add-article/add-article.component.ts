import { Component, OnInit } from '@angular/core';
import { Article } from '../models/Article';
import { ArticleService } from '../serviceArticle/article.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  article !: Article;
  constructor(private ArticleService: ArticleService) {}

  ngOnInit(): void {
  }

  
    save(f: NgForm) {
      console.log(f.value);
      this.article=f.value;
      this.ArticleService.addArticle(this.article).subscribe(
        data=>{
          console.log(data);
        });
  
    }
}
