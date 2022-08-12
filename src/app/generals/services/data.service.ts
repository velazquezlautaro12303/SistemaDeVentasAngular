import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getCartById(id: Number) {
    return this.http.get(this.url + "/cart/search/getCartById?id=" + id);
  }

  private url: String = environment.url;

  constructor(
    private http: HttpClient
  ){
  }

  getProducts(pageActual:Number, size:Number, category:String, brand:String, nameProduct:String, minPrice:Number, maxPrice:Number){
    let url = this.url + "/product";
    url = url + "?size=" + size + "&page=" + pageActual;
    if (category != null){
      url = url + "&category=" + category;
    }
    if (brand != null){
      url = url + "&brand=" + brand;
    }
    if (nameProduct != null){
      url = url + "&nameProduct=" + nameProduct;
    }
    if(minPrice != null && maxPrice != null){
      url = url + "&minPrice=" + minPrice + "&maxPrice=" + maxPrice;
    }
    console.log(url);
    return this.http.get(url);
  }

  checkUser(nameUser:String, password:String){
    return this.http.post(this.url + "/login",{
      nameUser: nameUser,
      password: password
    });
  }

  getBrands(){
    return this.http.get(this.url + "/brand");
  }

  getCategories(){
    return this.http.get(this.url + "/category");
  }

  getCoupons(){
    return this.http.get(this.url + "/coupon");
  }

  getOrders(idUser:number){
    return this.http.get(this.url + "/user/" + idUser + "/carts");
  }

  getItemCarts(id:string){
    return this.http.get(this.url + "/cart/" + id + "/itemCarts");
  }

  getMethodBuy(){
    return this.http.get(this.url + "/methodBuy");
  }
}
