import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/generals/product.model';
import { DataService } from 'src/app/generals/services/data.service';
import { MyCartService } from 'src/app/generals/services/my-carrito.service';

@Component({
  selector: 'app-target-product',
  templateUrl: './target-product.component.html',
  styleUrls: ['./target-product.component.css']
})
export class TargetProductComponent implements OnInit {

  constructor(private myCarritoService:MyCartService,
    private dataService:DataService) { }

  ngOnInit(): void {
  }

  @Input() product:Product;

  addItemToCart(){
    this.myCarritoService.usuarioRegister == false ?
      alert("Inicie sesion para proceder con las compras")
     : this.myCarritoService.addProduct(this.product);
  }

}
