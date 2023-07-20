import { Component, OnInit } from '@angular/core';
import { CartService } from '../serviceCart/cart.service';
import { Article } from '../models/Article';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  
  public articles : any=[];
  public article : Article[];

  public grandTotal : number=0;
  Quantity:any;
  value:number=1;
  cartItems: any[] = [];

  constructor(private cartService: CartService/* ,private toast : ToastrService */) {}

  
 

  ngOnInit(): void {
    this.articles=this.cartService.getProducts();
    this.Quantity = Array(this.articles.length).fill(this.value);    
  } 
  /*  MessageCommande(){
    this.toastr.show('Vous avez effectué une commande avec un total à payer de '+this.sumColumn('idTable',5));
  }  */
  // getTotal(){
  //   let Total = 0;
  //   let i=0;
  //   this.products.forEach((item: { price: any; })=>{
  //     Total+=item.price+this.Quantity[i];
  //     i++;
  //   })
  //   return Total;
  // }
  sumColumn(tableId:string, columnIndex:number) : number {
    let table = <HTMLTableElement>document.querySelector(`table#${tableId}`);
    let total = 0;
    for (let i = 1; i < table.rows.length; i++) {
      total += parseFloat(table.rows[i].cells[columnIndex].innerHTML);
    }
    return total;
  }
  
  removeCartItem(item:any){
    this.cartService.removeCartItem(item);
  }
  removeAllCartItems(){
     this.cartService.removeAllCart();
  }
  increment(i:number) {
    this.Quantity[i] += 1;
  }

  decrement(i:number) {
    this.Quantity[i] -= 1;
  }
}
