import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { LoginComponent } from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  { path: '', component: StoreComponent },
  { path: 'product/:id', component: DetailProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'my-account', component: MyAccountComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
