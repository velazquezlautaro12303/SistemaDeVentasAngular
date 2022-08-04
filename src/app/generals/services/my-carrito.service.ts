import { EventEmitter, Injectable, Output } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})

export class MyCarritoService {

  @Output() eventCarrito :EventEmitter<[Product,number][]>;

  carrito:[Product,number][] = [];

  constructor() {
    this.eventCarrito = new EventEmitter();
  }

  private getIndexProduct(product:Product){
    return this.carrito.findIndex(p => p[0] == product);
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
    this.eventCarrito.emit(this.carrito);
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
