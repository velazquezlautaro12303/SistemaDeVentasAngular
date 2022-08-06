import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string = environment.url;

  coupon:[string, number][] = [["OFERTA",100]];

  constructor(
    private http: HttpClient
  ){ }

  getProducts(pageActual:number, size:number){
    let url = this.url + "/product";
    url = url + "?size=" + size + "&page=" + pageActual;
    return this.http.get(url);
  }

  getCoupons(){
    return this.http.get(this.url + "/coupon");
  }

  getCantProductsAvailable(){
    return this.http.get(this.url);
  }

  checkUser(){
    return this.http.get(this.url + "/user");
  }

}
