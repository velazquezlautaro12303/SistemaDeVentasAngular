import { Component, OnInit } from '@angular/core';
import { Product } from '../generals/product.model';
import { DataService } from '../generals/services/data.service';
import { MyCarritoService } from '../generals/services/my-carrito.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    private myCarritoService : MyCarritoService,
    private dataService : DataService
    ) { }

  mycarrito:[Product,number][] = [];

  total = 0;
  coupon = 0;
  methodBuy = ["Paypal","Payoneer","Check Payment","Direct Bank Transfer","Cash on Delivery "];
  radioValue = 'A';

  ngOnInit(): void {
    this.mycarrito = this.myCarritoService.carrito;
    this.total = this.myCarritoService.calculateTotal();
    this.myCarritoService.eventCarrito.subscribe((total: number) => this.total = total );
  }

  subtractProduct(index:number){
    this.mycarrito[index][1] > 1 ? this.myCarritoService.subtractProductByIndex(index) : this.deleteProduct(index);
  }

  addProduct(index:number){
    this.myCarritoService.addProductByIndex(index);
  }

  deleteProduct(index:number){
    this.myCarritoService.deleteProductByIndex(index);
  }

  applyCoupon(codeCoupon:string){
    this.coupon = this.dataService.coupon[0] == codeCoupon && this.total == 0 ? this.dataService.coupon[1] : 0 ;
  }
}
