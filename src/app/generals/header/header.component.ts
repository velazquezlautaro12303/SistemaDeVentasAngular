import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MyCartService } from '../services/my-carrito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  nameUser:String;

  constructor(
    private router:Router,
    private myCartService: MyCartService,
    private cdr: ChangeDetectorRef
    ) {
    }

  ngOnInit(): void {
    this.myCartService.eventQty.subscribe((qty: number) => {this.qty = qty;
      this.cdr.detectChanges();});
    this.nameUser = this.myCartService.user.nameUser;
    this.myCartService.eventNameUser.subscribe((nameUser:String) => {this.nameUser = nameUser;
      this.cdr.detectChanges();});
  }

  logout(){
    alert("Adios " + this.myCartService.user.nameUser);
    this.myCartService.usuarioRegister = false;
    this.myCartService.user.nameUser = "";
    this.myCartService.notifyChangesNameUser();
    this.router.navigate(['']);
  }

  cart(){
    this.myCartService.usuarioRegister == false ?
      alert("Inicie sesion para poder ver el carrito")
     : this.router.navigate(['cart']);
  }

  sales(){
    this.myCartService.usuarioRegister == false ?
      alert("Inicie sesion para poder ver sus compras")
     : this.router.navigate(['detail-buy']);;
  }

  qty:number = 0;
}
