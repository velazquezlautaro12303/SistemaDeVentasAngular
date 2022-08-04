import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/generals/product.model';
import { MyCarritoService } from 'src/app/generals/services/my-carrito.service';

@Component({
  selector: 'app-target-product',
  templateUrl: './target-product.component.html',
  styleUrls: ['./target-product.component.css']
})
export class TargetProductComponent implements OnInit {

  constructor(private myCarritoService:MyCarritoService) { }

  ngOnInit(): void {
  }

  @Input() product:Product;

  addItemToCart(){
    this.myCarritoService.addProduct(this.product);
  }

}
