import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyCarritoService } from '../services/my-carrito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  constructor(
    private router:Router,
    private myCarritoService: MyCarritoService,
    private cdr: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    this.myCarritoService.eventQty.subscribe((qty: number) => {this.qty = qty;
      this.cdr.detectChanges();});
  }

  logout(){
    this.router.navigate(['']);
  }

  qty:number = 0;
}
