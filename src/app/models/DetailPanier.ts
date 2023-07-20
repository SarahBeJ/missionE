import { Article } from "./Article";

export class DetailPanier {
    article: Article;
    quantity: number;
    constructor(Article: Article, quantity: number){
        this.article=Article;
        this.quantity=quantity;
    }
}