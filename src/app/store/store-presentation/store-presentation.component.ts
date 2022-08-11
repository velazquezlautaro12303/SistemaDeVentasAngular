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
    private dataService:DataService
    ) {
  }

  products:Product[];
  option:String = "Product short by";
  cantProducts:number;
  entriesPerPage:number = 8;
  total:number;
  pageIndex:number = 1;
  brands:[String,number][] = [];
  categories:String[] = [];

  category:String;
  brand:String;
  nameProduct:String;

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getCategories();
  }

  getProducts(){
    let maxPrice = null;
    let minPrice = null;
    switch (this.option) {
      case "$0 to $50":
        minPrice = 0;
        maxPrice = 999;
        break;
      case "$51 to $100":
        minPrice = 1000;
        maxPrice = 9999;
        break;
      case "$101 to $150":
        minPrice = 10000;
        maxPrice = 100000;
        break;

      default:
        break;
    }
    this.dataService.getProducts(this.pageIndex - 1, this.entriesPerPage,this.category, this.brand, this.nameProduct, minPrice!!, maxPrice!!).subscribe((products:any) => {
      this.products = products.content;
      this.total = products.totalElements;
      this.pageIndex = 1;
    });
  }

  private getBrands(){
    this.dataService.getBrands().subscribe((request:any) => {
      let brands = request._embedded.brands;
      brands.forEach((element:any) => {
        this.brands.push([element.nameBrand, element.countProducts]);
      });
    });
  }

  private getCategories(){
    this.dataService.getCategories().subscribe((body:any) => {
      let categories = body._embedded.categories;
      categories.forEach((element:any) => {
        this.categories.push(element.nameCategory);
      });
    });
  }

  productsByCategory(category: String){
    this.option = "Product short by";
    this.category = category;
    this.getProducts();
  }

  productsByBrand(brand: String){
    this.option = "Product short by";
    this.brand = brand;
    this.getProducts();
  }

}
