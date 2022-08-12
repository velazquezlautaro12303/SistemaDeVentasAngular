import { Component, OnInit } from '@angular/core';
import { Coupon, ItemCart, MethodBuy } from '../generals/product.model';
import { DataService } from '../generals/services/data.service';
import { MyCartService } from '../generals/services/my-carrito.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    private myCartService : MyCartService,
    private dataService : DataService) {
      this.dataService.getCoupons().subscribe((respone:any) => {
        respone._embedded.coupons.forEach((item:any) => {
          this.coupons.push( new Coupon(item.id, item.codCoupon, item.discount));
        });
      });
      this.dataService.getMethodBuy().subscribe((respone:any) => {
        respone._embedded.methodBuys.forEach((element:any) => {
          this.methodsBuy.push(new MethodBuy(element.id, element.nameMethod));
        });
      });
      this.mycart = this.myCartService.cart;
    }

  methodsBuy:MethodBuy[] = [];
  coupons:Coupon[] = [];
  mycart:ItemCart[] = [];
  total:number = 0;
  coupon:Coupon = new Coupon(10, "", 0);  //Valor por defecto el '10'
  radioValue:number | null;

  ngOnInit(): void {
    this.radioValue = null;
    this.myCartService.eventCart.subscribe((item:ItemCart[]) => {
      this.mycart = this.myCartService.cart;
    });
    this.total = this.myCartService.calculateTotal();
    this.myCartService.eventTotalCart.subscribe((total: number) => this.total = total );
  }

  subtractProduct(index:number){
    this.mycart[index].cant > 1 ? this.myCartService.subtractProductByIndex(index) : this.deleteProduct(index);
  }

  addProduct(index:number){
    this.myCartService.addProductByIndex(index);
  }

  deleteProduct(index:number){
    this.myCartService.deleteProductByIndex(index);
  }

  applyCoupon(codeCoupon:String){
    let index = this.coupons.map((item:Coupon) => item.codeCoupon).indexOf(codeCoupon);
    if (index != -1){
      let discount = this.total > this.coupons[index].discout ? this.coupons[index].discout : 0;
      if (discount == 0) {
        alert("El monto total debe ser mayor al descuento del cupon");
      }
      else{
        alert("Cupon aplicado.!");
      }
      this.coupon = new Coupon(this.coupons[index].id, this.coupons[index].codeCoupon, discount);
    }
    else{
      alert("Cupon invalido");
    }
  }

  buy(){
    if(this.myCartService.usuarioRegister == true)
      this.radioValue != null ? this.myCartService.buy(this.radioValue, this.coupon.id) : alert("Seleccione metodo de pago");
    else
      alert("Inicie sesion para realizar compras");
  }
}
