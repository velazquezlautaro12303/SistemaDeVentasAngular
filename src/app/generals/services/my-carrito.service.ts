import { EventEmitter, Injectable, Output } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})

export class MyCarritoService {

  @Output() eventCarrito : EventEmitter<number>;

  carrito:[Product,number][] = [];
  total : number;

  constructor() {
    this.eventCarrito = new EventEmitter();
  }

  private getIndexProduct(product:Product){
    return this.carrito.findIndex(p => p[0] == product);
  }

  calculateTotal(){
    this.total = this.carrito.length != 0 ? this.carrito.map(
      (itemCarrito:[Product,number]) => itemCarrito[0].price * itemCarrito[1]).reduce(
      (acumulador:number, itemTotal:number) => acumulador + itemTotal) : 0;
    return this.total;
  }

  addProduct(product:Product){
    let index = this.getIndexProduct(product);
    if(index != -1){
      this.carrito[index][1]++;
    }
    else {
      this.carrito.push([product,1]);
    }
    this.notifyChanges();
  }

  private notifyChanges(){
    this.eventCarrito.emit(this.calculateTotal());
  }

  addProductByIndex(index:number){
    this.carrito[index][1]++;
    this.notifyChanges();
  }

  deleteProductByIndex(index:number){
    this.carrito.splice(index,1);
    this.notifyChanges();
  }

  subtractProductByIndex(index:number){
    this.carrito[index][1]--;
    this.notifyChanges();
  }

}
