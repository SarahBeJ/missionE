import { Injectable } from '@angular/core';
import { Article } from '../models/Article';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: Article[] = [];
  numOfItems =new BehaviorSubject([]);
  public productList = new BehaviorSubject<any>([]);
  constructor() {}

  getProducts() {
    return this.cartItemList;
  }

  // addtoCart(product: any) {
  //   this.cartItemList.push(product); 
  // }
  addtoCart(product: Article) {
    for(let i = 0; i < this.cartItemList.length; i++) {
        if(product.idCommande === this.cartItemList[i].idCommande) {
            console.log("Product already in cart");
            return;
        }
    }
    this.cartItemList.push(product);
    console.log("Product added to cart");
}


  getTotalPrice() :number{
    let Total = 0;
    this.cartItemList.map((a: any) => {
      Total += a.total;
    });
    return Total;
  }

  removeCartItem(product:Article){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.idCommande===a.id){
        this.cartItemList.splice(index,1);
      }
    })
  }
  removeAllCart(){
    this.cartItemList.map((a:any,index:any)=>{
      this.cartItemList.splice(index,this.cartItemList.length);
    })
  }
}
