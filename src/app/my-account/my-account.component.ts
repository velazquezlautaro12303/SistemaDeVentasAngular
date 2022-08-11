import { Component, OnInit } from '@angular/core';
import { ItemCart, ItemCarts, Order, Product } from '../generals/product.model';
import { DataService } from '../generals/services/data.service';
import { MyCartService } from '../generals/services/my-carrito.service';

@Component({
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(
    private dataService : DataService,
    private myCartService: MyCartService
    ) { }

  orders:Order[] = [];
  itemCarts:ItemCart[] = [];

  ngOnInit(): void {
    this.dataService.getOrders(this.myCartService.user.id).subscribe((body:any) => {
      body._embedded.carts.forEach((element:any) => {
        this.orders.push(new Order(element.date, element.methodBuy.nameMethod,
          [element.coupon.codCoupon, element.coupon.discount], element.id, element.total));
      });
    });
  }

}
