import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})

export class MyCarritoService {

  carrito:[number,number][] = [];

  constructor() { }

  private getIndexProduct(idProduct:number){
    return this.carrito.findIndex(p => p[0] == idProduct);
  }

  addProduct(idProduct:number){
    let index = this.getIndexProduct(idProduct);
    if(index != -1){
      this.carrito[index][1]++;
    }
    else {
      this.carrito.push([idProduct,1]);
    }
  }

  deleteProduct(idProduct:number){
    this.carrito.splice(this.getIndexProduct(idProduct),1);
  }

}
