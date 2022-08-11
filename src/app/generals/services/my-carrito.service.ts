import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ItemCart, ItemCarts, Product, User } from '../product.model';

@Injectable({
  providedIn: 'root'
})

export class MyCartService {

  @Output() eventTotalCart : EventEmitter<number>;
  @Output() eventQty : EventEmitter<number>;
  @Output() eventNameUser : EventEmitter<String>;
  @Output() eventCart : EventEmitter<ItemCart[]>;

  private url: String = environment.url;

  cart:ItemCart[] = [];
  total:number;
  qty:number;

  usuarioRegister: boolean = false;
  user:User = new User(-1, "");

  notifyChangesNameUser(){
    this.eventNameUser.emit(this.user.nameUser);
  }

  constructor(
    private http: HttpClient
    ) {
    this.eventTotalCart = new EventEmitter();
    this.eventQty = new EventEmitter();
    this.eventNameUser = new EventEmitter();
    this.eventCart = new EventEmitter();
  }

  notifyChangesCart(){
    this.eventCart.emit(this.cart);
  }

  private getIndexProduct(product:Product){
    return this.cart.findIndex(p => p.product.id == product.id);
  }

  calculateQty(){
    return this.qty = this.cart.length != 0 ? this.cart.map(
      (itemCart:ItemCart) => itemCart.cant).reduce(
      (acumulador:number, itemQty:number) => acumulador + itemQty) : 0;
  }

  calculateTotal(){
    this.total = this.cart.length != 0 ? this.cart.map(
      (itemCart:ItemCart) => itemCart.product.price * itemCart.cant).reduce(
      (acumulator:number, itemTotal:number) => acumulator + itemTotal) : 0;
    return this.total;
  }

  addProduct(product:Product){
    let index = this.getIndexProduct(product);
    if(index != -1){
      this.cart[index].cant++;
    }
    else {
      this.cart.push(new ItemCart(product,1));
    }
    this.notifyChanges();
  }

  private notifyChanges(){
    this.eventTotalCart.emit(this.calculateTotal());
    this.eventQty.emit(this.calculateQty());
  }

  notifyChangesUser(){
    this.eventNameUser.emit(this.user.nameUser);
  }

  addProductByIndex(index:number){
    this.cart[index].cant++;
    this.notifyChanges();
  }

  deleteProductByIndex(index:number){
    this.cart.splice(index,1);
    this.notifyChanges();
  }

  subtractProductByIndex(index:number){
    this.cart[index].cant--;
    this.notifyChanges();
  }

  buy(methodBuyId:number, couponId:number){
    this.http.post(this.url + "/cart",{
      userId: this.user.id,
      methodBuyId: methodBuyId,
      couponId: couponId,
      itemCarts: this.cart.map((item:ItemCart) => new ItemCarts(item.product.id, item.cant))
    }).subscribe((any) => {
      this.cart = [];
      this.notifyChanges();
      this.notifyChangesCart();
      alert("Compra realizada");
    });
  }

}
