import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../generals/services/data.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(
    private dataService:DataService,
    private router: Router
    ) {
  }

  products = [];
  option:string = "Product short by";
  brand:string;
  search:string;

  ngOnInit(): void {
    Array.prototype.push.apply(this.products,this.dataService.products);
  }


  orderProductsbyPrice(){
    let option;
    if(this.option != "Product short by"){
      option = this.option;
    }
    else{
      option = null;
    }
    this.router.navigate([], {
      queryParams: {
        orderPrice: option
      },
      queryParamsHandling: 'merge'
      // preserve the existing query params in the route
    });
  }

  searcher(){
    this.router.navigate([''],{queryParams: {nameProduct: this.search}});
  }

  productsByCategory(category: string){
    this.router.navigate([''],{queryParams: {nameProduct: this.search,
                                             category : category,
                                             orderPrice: null,
                                            }, queryParamsHandling: 'merge'});
    this.option = "Product short by";
  }

  productsByBrand(brand: string){
    this.router.navigate([''],{queryParams: {nameProduct: this.search,
                                             brand : brand,
                                             orderPrice: null,
                                            }, queryParamsHandling: 'merge'});
    this.option = "Product short by";
  }

  brands:[string,number][] = [["Nulla",45],["Curabitur",34],["Nunc",67],["Ullamcorper",74],["Fusce",89],["Sagittis",28]];
  categoryes = ["Fashion & Beauty","Kids & Babies Clothes","Men & Women Clothes","Gadgets & Accessories","Electronics & Accessories"];
}
