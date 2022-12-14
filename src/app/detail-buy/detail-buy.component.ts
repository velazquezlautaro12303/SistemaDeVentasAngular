import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coupon, ItemCart, ItemCarts, Product } from '../generals/product.model';
import { DataService } from '../generals/services/data.service';

@Component({
  templateUrl: './detail-buy.component.html',
  styleUrls: ['./detail-buy.component.css']
})
export class DetailBuyComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private dataService : DataService
  ) { }

  id:Number;
  itemCarts:ItemCart[] = [];
  total:number = 0;
  coupon:Coupon|null;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.dataService.getItemCarts(this.id.toString()).subscribe((body:any) => {
      body._embedded.itemCarts.forEach((element:any) => {this.itemCarts.push(new ItemCart(new Product(element.product.nameProduct, element.product.price, 0), element.cant));
        this.total += element.cant*element.product.price;});
    });
    this.dataService.getCartById(this.id).subscribe((body:any) => {
      this.coupon = new Coupon(body._embedded.coupon.id, body._embedded.coupon.codCoupon, body._embedded.coupon.discount);
    });
  }

}
