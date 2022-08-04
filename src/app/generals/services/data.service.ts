import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  products = [new Product("Mochila",100,1),
              new Product("Notebook",200,2),
              new Product("Taza",300,3),
              new Product("Auricular",400,4),
              new Product("Zapatilla",500,5),
              new Product("Celular",600,6),
              new Product("Plancha",700,7),
              new Product("Buzo",800,8)];

  error = new Product("error",0,0);

  coupon:[string, number] = ["OFERTA",100];

}
