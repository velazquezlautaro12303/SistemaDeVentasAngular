import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string = environment.url;

  coupon:[string, number][] = [["OFERTA",100]];

  constructor(
    private http: HttpClient
  ){ }

  getProducts(pageActual:number, entriesPerPage:number){
    let url = this.url + "?page=" + pageActual + "&entriesPerPage=" + entriesPerPage;
    return this.http.get(url);
  }

  getCoupons(){
    return this.http.get(this.url + "/Coupons");
  }

  getCantProductsAvailable(){
    return this.http.get(this.url);
  }

}
