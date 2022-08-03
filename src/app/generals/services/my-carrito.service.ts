import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})

export class MyCarritoService {

  carrito:[Product,number][] = [];

  constructor() { }

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
  }

  deleteProduct(product:Product){
    this.carrito.splice(this.getIndexProduct(product),1);
  }

}
