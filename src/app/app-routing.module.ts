import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';

const routes: Routes = [
  { path: '' , loadChildren: () => import('./store/store.module').then(m => m.StoreModule) },
  { path: 'cart', component: CartComponent },
  { path: 'my-account', component: MyAccountComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
