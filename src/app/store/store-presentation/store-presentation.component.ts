import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/generals/product.model';
import { DataService } from 'src/app/generals/services/data.service';

@Component({
  templateUrl: './store-presentation.component.html',
  styleUrls: ['./store-presentation.component.css']
})
export class StorePresentationComponent implements OnInit {

  constructor(
    private dataService:DataService,
    private router: Router
    ) {
  }

  products:Product[];
  option:string = "Product short by";
  brand:string;
  search:string;
  cantProducts:number;
  entriesPerPage:number = 8;
  cantPages:number;
  pageActual = 0;

  ngOnInit(): void {
    // this.dataService.getCantProductsAvailable().subscribe(this.cantProducts);
    // this.cantPages = this.cantProducts / this.entriesPerPage;
    this.dataService.getProducts(this.pageActual, this.entriesPerPage).subscribe((products:any) => {
      this.products = products.content;
    });
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
