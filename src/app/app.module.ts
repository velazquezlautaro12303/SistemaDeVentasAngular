import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './generals/services/data.service';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { StoreComponent } from './store/store.component';
import { TargetProductComponent } from './target-product/target-product.component';
import { GeneralsModule } from './generals/generals.module';
import { MyAccountComponent } from './my-account/my-account.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    TargetProductComponent,
    DetailProductComponent,
    MyAccountComponent,
    LoginComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GeneralsModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  exports: [
    LoginComponent,
    CartComponent
  ]
})
export class AppModule { }
