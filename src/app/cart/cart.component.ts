import { AfterViewInit, Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.mycarrito = this.myCarritoService.carrito;
    this.myCarritoService.eventCarrito.subscribe((carrito:[Product,number][]) => {
      this.mycarrito = carrito;
      this.total = this.mycarrito.length != 0 ? this.mycarrito.map(
        (itemCarrito:[Product,number]) => itemCarrito[0].price * itemCarrito[1]).reduce(
        (acumulador:number, itemTotal:number) => acumulador + itemTotal) : 0;
    });
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
