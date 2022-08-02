import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Product } from '../generals/product.model';
import { MyCarritoService } from '../generals/services/my-carrito.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {

  constructor(private myCarritoService : MyCarritoService) { }

  mycarrito:[Product,number][] = [];

  ngOnInit(): void {
    this.mycarrito = this.myCarritoService.carrito;
  }

  subtractProduct(index:number){
    this.mycarrito[index][1] > 1 ? this.mycarrito[index][1]-- : this.deleteProduct(index) ;
  }

  addProduct(index:number){
    this.mycarrito[index][1]++;
  }

  deleteProduct(index:number){
    this.mycarrito.splice(index,1);
  }
}
