import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../generals/product.model';
import { MyCarritoService } from '../generals/services/my-carrito.service';

@Component({
  selector: 'app-target-product',
  templateUrl: './target-product.component.html',
  styleUrls: ['./target-product.component.css']
})
export class TargetProductComponent implements OnInit {

  constructor(private carrito:MyCarritoService) { }

  ngOnInit(): void {
  }

  @Input() product:Product;

  addItemToCart(){
    this.carrito.addProduct(this.product);
  }

}
